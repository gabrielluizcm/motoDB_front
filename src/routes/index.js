import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Error404 from '../pages/Error404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Error404} />
    </Switch>
  );
}
