import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/starred">
      <Starred />
    </Route>

    <Route path="/">
      <div>Page Not Found (404)</div>
    </Route>
  </Switch>
);

export default App;
