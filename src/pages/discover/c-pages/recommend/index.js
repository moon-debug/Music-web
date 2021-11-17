import React, { memo } from 'react'

import MNTopBanner from './c-cpns/top-banner'
import MNHotRecommend from './c-cpns/hot-recommend'
import MNNewAlbum from './c-cpns/new-album'
import MNRCMRanking from './c-cpns/rcm-ranking'
import MNUserLogin from './c-cpns/user-login'
import MNSettleSinger from './c-cpns/settle-singer'
import MNHotAnchor from './c-cpns/hot-anchor'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

function MNRecommend(props) {
  return (
    <RecommendWrapper>
      <MNTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <MNHotRecommend/>
          <MNNewAlbum />
          <MNRCMRanking />
        </RecommendLeft>
        <RecommendRight>
          <MNUserLogin/>
          <MNSettleSinger/>
          <MNHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(MNRecommend)