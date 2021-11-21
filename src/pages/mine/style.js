import styled from "styled-components";
import mymusic from "@/assets/img/mymusic.png";

export const MineWrapper = styled.div`
  min-height: 700px;
  padding-top: 104px;
  background-color: #fff;
  border: 1px solid #d3d3d3;

  .content {
    width: 807px;
    height: 268px;
    margin: 0 auto 0;
    
    background: url(${mymusic}) no-repeat 0 0;
    
    h2 {
      height: 100px;
      text-indent: -9999px;
    }

    .btn {
      display: block;
      width: 167px;
      height: 45px;
      margin: 102px 0 0 482px;
      text-indent: -9999px;
      background: url(${mymusic}) no-repeat 0 9999px;

      :hover {
        background-position-y: -278px;
      }
    }
  }
`