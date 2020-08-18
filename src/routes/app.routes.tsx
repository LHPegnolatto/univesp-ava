import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

export default [
  <Route key="home" component={Home} path="/" exact />
];