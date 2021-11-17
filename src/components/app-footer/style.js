import styled from 'styled-components'
import link_img from '@/assets/img/sprite_footer_02.png'
import title_img from '@/assets/img/sprite_footer_01.png'

export const FooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  color: #666;

  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }
`

export const FooterLeft = styled.div`
  line-height: 24px;
  font-size: 12px;

  .links {
    a {
      color: #999;
    }

    .line {
      margin: 0 8px 0 10px;
      color: #999;
    }
  }

  .span-first {
    margin-right: 15px;
  }

  .a-first {
    margin-right: 30px;
  }
`

export const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;

  ul {
    display: flex;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 35px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${link_img});
      background-repeat: no-repeat;
      background-size: 110px 552px;
    }

    :nth-child(1) .link {
      background-position: -63px -456.5px;
    }

    :nth-child(2) .link {
      background-position: -63px -101px;
    }

    :nth-child(3) .link {
      background-position: 0 0;
    }

    :nth-child(4) .link {
      background-position: -60px -50px;
    }

    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 7px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${title_img});
      background-size: 180px 139px;
    }

    :nth-child(1) .title {
      background-position: 0 -108px;
      width: 72px;
    }

    :nth-child(2) .title {
      background-position: -1px -90px;
      margin-top: 8px;
    }

    :nth-child(3) .title {
      background-position: 0 0;
      margin-top: 8px;
    }

    :nth-child(4) .title {
      background-position: 0 -54px;
      margin-top: 8px;
    }

    :nth-child(5) .title {
      background-position: -1px -72px;
    }
  }
`