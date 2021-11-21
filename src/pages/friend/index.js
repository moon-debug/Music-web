import React, { memo } from 'react';

import { FriendWrapper } from './style';

export default memo(function MNFriend() {
  return (
    <FriendWrapper className="wrap-v2">
      <div className="content">
        <div className="">
        你可以关注明星和好友品味他们的私房歌单
        <br/>
        通过他们的动态发现更多精彩音乐
        </div>
        <a href="/#" className="btn">立即登录</a>
      </div>
    </FriendWrapper>
  )
})
