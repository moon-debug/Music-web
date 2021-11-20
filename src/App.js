import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import { HashRouter } from 'react-router-dom'
import MNAppHeader from '@/components/app-header';
import MNAppFooter from '@/components/app-footer';
import MNAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MNAppHeader />
        {renderRoutes(routes)}
        <MNAppFooter />
        <MNAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})

