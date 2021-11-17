import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import MNAlbumCover from '@/components/album-cover'
import MNThemeHeaderRCM from '@/components/theme-header-rcm';
import { AlbumWrapper } from './style';

export default memo(function MNNewAlbum() {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch])

  const pageRef = useRef();

  return (
    <AlbumWrapper>
      <MNThemeHeaderRCM title="新碟上架"/>
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
          <div className="album">
            <Carousel dots={false} ref={pageRef}>
              {
                [0, 1].map(item => {
                  return (
                    <div key={item} className="page">
                      {
                        newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                          return <MNAlbumCover key={iten.id} info={iten}
                                               size={100} width={118} bgp="-570px"/>
                        })
                      }
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
