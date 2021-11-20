import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils.js'

import { Slider } from 'antd';
import { 
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';
import { getSongDetailAction } from '../store/actionCreators';

export default memo(function MNAppPlayerBar() {
  // state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hooks
  const {currentSong} = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual);

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(1330472048))
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong]);

  const audioRef = useRef();

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
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
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
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play" onClick={() => playMusic()}></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 35)} alt=""/>
            </a>
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
        <Operator>
          <div className="left">
            <a href="/#" className="sprite_playbar btn icn">画中画</a>
            <a href="/#" className="sprite_playbar btn favor">喜欢</a>
            <a href="/#" className="sprite_playbar btn share">分享</a>
          </div>
          <div className="right sprite_playbar">
            <a href="/#" className="sprite_playbar btn volume">音量</a>
            <a href="/#" className="sprite_playbar btn loop">循环</a>
            <a href="/#" className="sprite_playbar btn playlist">列表</a>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
    </PlayerBarWrapper>
  )
})
