import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { 
  HeaderWrapper ,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function MNAppHeader() {
  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>)
    } else {
      return (
        <a href={item.link}>
          {item.title}
        </a>)
    }
  }

  // 返回的JSX
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <h1 className="logo sprite_01"><a href="#/">网易云音乐</a></h1>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search"
                 placeholder="音乐/视频/电台/用户"
                 prefix={<SearchOutlined/>}/>
          <a className="center" href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter">创作者中心</a>
          <a href="#/">登录</a>
        </HeaderRight>
      </div>
      <div className="divider">
      </div>
    </HeaderWrapper>
  )
})
