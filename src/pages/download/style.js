import styled from "styled-components";
import download_bg from "@/assets/img/download/download_bg.png";

import download_clients from "@/assets/img/download/download_clients.png";

export const DownloadWrapper = styled.div`
  .main-wrapper {
    background: url(${download_bg});
    background-size: cover;
      
    .main {
      position: relative;
      width: 1100px;
      margin: 0 auto;
      padding: 80px 0 112px;
      height: 475px;

      .pc {
        display: inline-block;
        width: 556px;
        height: 100%;
        text-align: center;

        img {
          width: 464px;
          height: 273px;
        };
      }


      .mobile {
        display: inline-block;
        margin-left: 220px;
        width: 300px;
        height: 100%;
        text-align: center;

        img {
          width: 246px;
          height: 273px;
        }
      }

      .clients {
        position: absolute;
        line-height: 60px;
        height: 60px;
        top: 0;
        right: 0;
        font-size: 14px;
        color: #fff;
        cursor: pointer;

        i {
          position: absolute;
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(${download_clients}) no-repeat;
          background-size: contain;
          margin-top: 20px;
          left: -26px;
        }

        :hover {
          opacity: 0.7;
        }
      }

      .main-title {
        margin-bottom: 23px;
        font-size: 22px;
        opacity: 0.8;
        color: #fff;
      }
    }
  }
`