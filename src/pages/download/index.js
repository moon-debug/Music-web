import React, { memo } from 'react';

import { DownloadWrapper } from './style';

export default memo(function MNDownload() {
  return (
    <DownloadWrapper>
      <div></div>
      <div className="main-wrapper">
        <div className="main">
          <div className="pc">
            <div className="main-title">在电脑上听</div>
            <img className="pc-img" alt=" " src="//p1.music.126.net/PGNd0EAtUgA7iRCWXPnUuA==/109951164207162781.png?param=800x0"/>
            <div className="main-type">
              <i className="main-icon"></i>
              <i className="main-icon"></i>
            </div>
            <div className="main-button">下载电脑端</div>
          </div>
          <div className="mobile">
            <div className="main-title">在手机上听</div>
            <img className="mobile-img" alt=" " src="https://p1.music.126.net/sLtya87wVHWn-HWJ33oN4g==/109951164207180884.png?param=450x0"/>
            <div className="main-type">
              <i className="main-icon"></i>
              <i className="main-icon"></i>
            </div>
            <div className="main-button">
              <i className="main-icon-ncode"></i>
              下载手机端
            </div>
          </div>
          <div className="clients">
            <i className=""></i>
            其他操作系统客户端
          </div>
        </div>
      </div>
    </DownloadWrapper>
  )
})
