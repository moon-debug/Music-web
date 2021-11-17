import React from 'react'
import { Redirect } from "react-router";

import MNDiscover from "@/pages/discover";
import MNRecommend from "@/pages/discover/c-pages/recommend"
import MNRanking from "@/pages/discover/c-pages/ranking"
import MNSongs from "@/pages/discover/c-pages/songs"
import MNDjradio from "@/pages/discover/c-pages/djradio"
import MNArtist from "@/pages/discover/c-pages/artist"
import MNAlbum from "@/pages/discover/c-pages/album"

import MNMine from "@/pages/mine"
import MNFriend from "@/pages/friend"

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