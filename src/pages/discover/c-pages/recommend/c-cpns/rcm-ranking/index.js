import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopRankingAction } from '../../store/actionCreators';

import MNThemeHeaderRCM from '@/components/theme-header-rcm';
import MNTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style'

export default memo(function MNRCMRanking() {

  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRankingAction(0));
    dispatch(getTopRankingAction(2));
    dispatch(getTopRankingAction(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <MNThemeHeaderRCM title="榜单"/>
      <div className="tops">
        <MNTopRanking info={upRanking}/>
        <MNTopRanking info={newRanking}/>
        <MNTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
