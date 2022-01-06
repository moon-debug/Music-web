import styled from "styled-components";
import friend_notlogin from "@/assets/img/friend_notlogin.jpg";

export const FriendWrapper = styled.div`
  min-height: 700px;
  padding-top: 70px;
  background-color: #fff;
  border: 1px solid #d3d3d3;

  .content {
    width: 902px;
    height: 414px;
    margin: 0 auto 0;
    padding: 178px 0 0 535px;
    background: url(${friend_notlogin}) no-repeat 0 0;

    .btn {
      display: block;
      width: 157px;
      height: 48px;
      margin-top: 44px;
      text-indent: -9999px;
      background: url(${friend_notlogin}) no-repeat 0 -430px;

      :hover {
        background-position-y: -430px;
      }
    }
  }
`