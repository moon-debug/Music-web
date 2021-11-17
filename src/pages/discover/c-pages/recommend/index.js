import React, { memo } from 'react'

import MNTopBanner from './c-cpns/top-banner'
import MNHotRecommend from './c-cpns/hot-recommend'
import MNNewAlbum from './c-cpns/new-album'
import MNRCMRanking from './c-cpns/rcm-ranking'

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
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(MNRecommend)