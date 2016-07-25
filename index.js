import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import DevTools from './containers/DevTools'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} history={history}>
    <App />
  </Provider>,
  document.getElementById('root')
)
