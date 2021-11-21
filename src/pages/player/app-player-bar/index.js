import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils.js'
import { 
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentSongAndIndexAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators';

import { NavLink } from 'react-router-dom';
import { Slider, message } from 'antd';
import { 
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function MNAppPlayerBar() {
  // state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hooks
  const {
    currentSong,
    sequence,
    playList,
    lyricArray,
    currentLyricIndex
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    playList: state.getIn(["player", "playList"]),
    lyricArray: state.getIn(["player", "lyricArray"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual);

  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(1330472048))
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(()=> {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    }) 
  }, [currentSong]);

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
  const duration = currentSong.dt;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = e => {
    // console.log(e.target.currentTime);
    const nowTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(nowTime * 1000);
      setProgress(currentTime / duration * 100);
    }

    // 获取当前歌词
    let i = 1;
    for (; i < lyricArray.length; i++) {
      let lyricItem = lyricArray[i];
      if (currentTime < lyricItem.time) {
        break;
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i-1));
      // console.log(lyricArray && lyricArray[i-1].content);
      message.open({
        key: "lyric",
        content: lyricArray && lyricArray[i-1].content,
        duration: 0,
        className: "lyric-class"
      })
    }
  }

  const changeSequence = () => {
    let currentSequence = (sequence + 1) % 3;
    dispatch(changeSequenceAction(currentSequence));
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentSongAndIndexAction(tag));
    audioRef.current.currentTime = 0;
    if(!isPlaying) {
      playMusic();
    }
  }

  const handleMusicEnded = () => {
    if (sequence === 2 || playList.length === 1) { // 单曲循环或列表中只有一首歌时
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSongAndIndexAction(1));     
    }
  }

  const sliderChange = useCallback((value) => {
    // console.log("change", value);
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);
  }, [duration]);

  const sliderAfterChange = useCallback((value) => {
    // console.log("after", value);
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);

    if(!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic]);

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev"
                  onClick={e => changeMusic(-1)}></button>
          <button className="sprite_playbar play"
                  onClick={() => playMusic()}></button>
          <button className="sprite_playbar next"
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <img src={getSizeImage(picUrl, 35)} alt=""/>
            <NavLink to="/discover/player" className="sprite_playbar mask"/>
          </div>
          <div className="info">
            <div className="song">
              <a className="song-name" href="/#">{currentSong.name}</a>
              <a className="song-singer" href="/#">{singerName}</a>
              <a className="sprite_playbar link" href="/#">link</a>
            </div>
            <div className="progress">
              <Slider defaultValue={0} tooltipVisible={false}
                      value={progress}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn icn">画中画</button>
            <button className="sprite_playbar btn favor">喜欢</button>
            <button className="sprite_playbar btn share">分享</button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume">音量</button>
            <button className="sprite_playbar btn loop"
                    onClick={e => changeSequence()}>循环</button>
            <button className="sprite_playbar btn playlist">{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}
             onTimeUpdate={e => timeUpdate(e)}
             onEnded={e => handleMusicEnded(e)}/>
    </PlayerBarWrapper>
  )
})