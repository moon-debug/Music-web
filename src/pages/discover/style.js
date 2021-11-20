import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top {
    height: 29px;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;

    .menu {
      padding-left: 180px;
      display: flex;

      .item {
        text-align: center;

        a {
          text-decoration: none;
          color: #fff;

          em {
            display: inline-block;
            height: 20px;
            padding: 0 13px;
            margin: 2px 17px 0;
            line-height: 21px;
            border-radius: 20px;

            &:hover {
              background-color: #9b0909;
            }
          }

          &.active em {
            background-color: #9b0909;
          }
        }

        :nth-child(3) {
          position: relative;

          em {
            padding-right: 17px;

            span {
              position: absolute;
              display: inline-block;
              width: 8px;
              height: 8px;
              top: 0px;
              opacity: 0.5;
              transform: scale(0.85);
            }
          }
        }
      }
    }
  }
`;

export const TopMenu = styled.div``;
