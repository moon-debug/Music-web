import React from 'react'
import { Redirect } from "react-router";

// import MNDiscover from "../pages/discover";
// import MNRecommend from "../pages/discover/c-pages/recommend";
// import MNRanking from "../pages/discover/c-pages/ranking";
// import MNSongs from "../pages/discover/c-pages/songs";
// import MNDjradio from "../pages/discover/c-pages/djradio";
// import MNArtist from "../pages/discover/c-pages/artist";
// import MNAlbum from "../pages/discover/c-pages/album";
// import MNPlayer from "../pages/player";

// import MNMine from "../pages/mine";
// import MNFriend from "../pages/friend";

const MNDiscover = React.lazy(_ => import("../pages/discover"));
const MNRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const MNRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const MNSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const MNDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const MNArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const MNAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
const MNPlayer = React.lazy(_ => import("../pages/player"));

const MNFriend = React.lazy(_ => import("../pages/friend"));
const MNMine = React.lazy(_ => import("../pages/mine"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: MNDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: MNRecommend
      },
      {
        path: "/discover/ranking",
        component: MNRanking
      },
      {
        path: "/discover/songs",
        component: MNSongs
      },
      {
        path: "/discover/djradio",
        component: MNDjradio
      },
      {
        path: "/discover/artist",
        component: MNArtist
      },
      {
        path: "/discover/album",
        component: MNAlbum
      },
      {
        path: "/discover/player",
        component: MNPlayer
      }
    ]
  },
  {
    path: "/mine",
    component: MNMine
  },
  {
    path: "/friend",
    component: MNFriend
  }
];

export default routes;