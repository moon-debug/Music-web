import styled from "styled-components";

import download_img from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    display: flex;

    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  
  .banner-item {
    height: 270px;

    .image {
      width: 100%;
    }
  }

  .slick-dots-bottom {
    height: 20px;

    li {
      width: 20px;
      height: 20px;

      button {
        width: 20px;
        height: 20px;
        background: url(${banner_sprite});
        background-position: 3px -343px;
        transition: backgound-image linear .3s;
      }
    }
 

    li.slick-active, li:hover {
      width: 20px;

      button {
        background: url(${banner_sprite});
        background-position: -16px -343px;
      }
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  background-image: url(${download_img});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    background-color: pink;
    position: absolute;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;    
    background: url(${banner_sprite});

    &.left {
      left: -68px;
      background-position: 0 -360px;

      :hover {
        background-position: 0 -430px;
      }
    }

    &.right {
      right: -68px;
      background-position: 0 -508px;

      :hover {
        background-position: 0 -578px;
      }
    }
  }
`