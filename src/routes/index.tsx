import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useAuthContext } from '../context/Auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

import NotFound from '../pages/NotFound';

const Routes = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <BrowserRouter>
      <Switch>
        {isAuthenticated ? AppRoutes : AuthRoutes}

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;