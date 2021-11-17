import React, { memo } from "react";

import { SongsCoverWrapper } from "./style";

import { getCount, getSizeImage } from '@/utils/format-utils.js'

export default memo(function MNSongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name}/>
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon ear"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-name">
        {info.name}
      </div>
      <div className="cover-author text-nowrap">
        by {info.copywriter || info.creator?.nickname}
      </div>
    </SongsCoverWrapper>
  );
});
