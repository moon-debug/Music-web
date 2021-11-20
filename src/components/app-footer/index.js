import React, { memo, Fragment } from 'react';

import { footerLinks, footerImages } from '@/common/local-data';

import {
  FooterWrapper,
  FooterLeft,
  FooterRight
} from './style';

export default memo(function MNAppFooter() {
  return (
    <FooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="links">
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
            <a href="mailto:yyyx@list.nie.netease.com">广告合作</a>
          </div>
          <div className="copyright">
            <span className="span-first">网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a target="_blank" rel="noreferrer" href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">浙网文[2021] 1186-054号</a>
          </div>
          <div className="report">
            <span className="span-first">违法和不良信息举报电话：0571-89853516</span>
            <span> 举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </div>
          <div className="info">
            <a className="a-first" target="_blank" rel="noreferrer" href="https://beian.miit.gov.cn/">
              粤B2-20090191-18  工业和信息化部备案管理系统网站
            </a>
            <a target="_blank" rel="noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
              浙公网安备 33010902002564号
            </a>
          </div>
        </FooterLeft>
        <FooterRight>
          <div className="content">
            <ul>
            {
              footerImages.map((item, index) => {
                return (
                  <li className="item" key={item.link}>
                    <a className="link" href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                    <span className="title"></span>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
