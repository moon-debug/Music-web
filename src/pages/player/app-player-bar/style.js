import styled from "styled-components";
import progressbar_sprite from "@/assets/img/progressbar_sprite.png";
import sprite_icon from "@/assets/img/sprite_icon.png";
import sprite_icn from "@/assets/img/sprite_icn.png";

export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 52px;
  bottom: 0;
  background-position: 0 0;
  background-repeat: repeat-x;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;

    :hover {
      background-position-x: -30px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};

    :hover {
      background-position-x: -40px;
    }
  }

  .next {
    background-position: -80px -130px;
    :hover {
      background-position-x: -110px;
    }
  }
`;

export const PlayInfo = styled.div`
  width: 642px;
  display: flex;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      position: relative;
      top: 3px;
      left: 8px;
      line-height: 20px;

      .song-name {
        color: #e8e8e8;
      }

      .song-singer {
        color: #a1a1a1;
        margin: 0 10px;
      }

      .link {
        display: inline-block;
        position: relative;
        top: 2px;
        width: 14px;
        height: 15px;
        text-indent: -9999px;
        background-position: -110px -103px;

        :hover {
          background-position-x: -130px;
        }
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin: 4px 15px 7px 6px;
      }

      .ant-slider-rail {
        height: 9px;
        background: url(${progressbar_sprite}) right 0;
      }

      .ant-slider-track {
        height: 9px;
        background: url(${progressbar_sprite}) left -66px;
      }

      .ant-slider-handle {
        width: 22px;
        height: 24px;
        border: none;
        margin-top: -7px;
        background: url(${sprite_icon}) 0 -250px;

        :hover {
          background-position-y: -280px;
        }

        &.ant-slider-handle-click-focused {
          display: none;
        }
      }

      

      .time {
        .now-time {
          color: #a1a1a1;
        }
        .divider {
          margin: 0 3px;
        }
        .duration {
          color: #797979;
        }
      }
    }
  }
`;

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    display: inline-block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    text-indent: -9999px;
  }

  .icn {
    background: url(${sprite_icn});

    :hover {
      background-position-y: -25px;
    }
  }

  .favor {
    background-position: -88px -163px;

    :hover {
      background-position-y: -189px;
    }
  }

  .share {
    background-position: -114px -163px;

    :hover {
      background-position-y: -189px;
    }
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;

      :hover {
        background-position-x: -31px;
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};

      :hover {
        background-position-x: ${(props) => {
          switch (props.sequence) {
            case 1:
              return "-93px";
            case 2:
              return "-93px";
            default:
              return "-33px";
          }
        }};
      }
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;

      :hover {
        background-position-y: -98px;
      }
    }
  }
`;
