// https://github.com/tylermcginnis/re-base/tree/master/examples/github-notetaker
// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Profile from './Profile';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Profile path="/profile/:username" component={Profile} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
