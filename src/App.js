import React, { memo, Suspense } from 'react';
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
        <Suspense fallback={<div>loading...</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <MNAppFooter />
        <MNAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})

