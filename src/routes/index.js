import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Motorcycles from '../pages/Motorcycles';
import Motorcycle from '../pages/Motorcycle';
import Register from '../pages/Register';
import Error404 from '../pages/Error404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Motorcycles} />
      <MyRoute exact path="/motorcycle" component={Motorcycle} isPrivate />
      <MyRoute exact path="/motorcycle/:id" component={Motorcycle} isPrivate />
      <MyRoute exact path="/register" component={Register} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute path="*" component={Error404} />
    </Switch>
  );
}
