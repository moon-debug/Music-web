import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import MNThemeHeaderRCM from '@/components/theme-header-rcm'
import MNSongsCover from '@/components/songs-cover'
import {
  HotRecommendWrapper
} from './style'

import { getHotRecommendsAction } from '../../store/actionCreators'

export default memo(function MNHotRecommend() {
  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <MNThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <MNSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
