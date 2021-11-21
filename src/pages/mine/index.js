import React, { memo } from 'react';

import { MineWrapper } from './style';

export default memo(function MNMine() {
  return (
    <MineWrapper className="wrap-v2">
      <div className="content">
        <h2>登陆网易云音乐</h2>
        <a href="/#" className="btn">立即登录</a>
      </div>
    </MineWrapper>
  )
})
