import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { discoverMenu } from "@/common/local-data.js"

import { NavLink } from 'react-router-dom';
import {
  DiscoverWrapper,
  TopMenu
} from './style'

export default memo(function MNDiscover(props) {
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1 menu">
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>
                    <em>{item.title}{index === 2 && <span>®</span>}</em>
                  </NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
