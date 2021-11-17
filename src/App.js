import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import MNAppHeader from '@/components/app-header';
import MNAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MNAppHeader />
        {renderRoutes(routes)}
        <MNAppFooter />
      </HashRouter>
    </Provider>
  )
})

