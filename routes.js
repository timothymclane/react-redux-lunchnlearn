import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'

export default (
  <Route path="/" component={App}>
    <Route path="/fakepage"
           component={FakePage} />
  </Route>
)
