import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  width: ${props => props.width + "px"};

  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }

    .icon-play {
      display: none;
      position: absolute;
      left: 72px;
      bottom: 6px;
      width: 22px;
      height: 22px;
      text-indent: -9999px;
      background-position: 0 -85px;

      :hover {
        background-position-y: -110px;
      }
    }

    :hover {
      .icon-play {
        display: inline-block;
      }
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`