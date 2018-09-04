import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { routerPath } from './constants/router/path.const';
import LoginPage from './views/Login';
import PrivateRoute from './components/PrivateRouter';
import { isAuthenticatedSelector } from './selectors/auth';
import routesConfig from './constants/router/routesConfig.const';
import SignUpPage from './views/SignUp';

const App = ({ authenticated }) => {
  return (
    <BrowserRouter basename="/app">
      <React.Fragment>
        <Switch>
          <Route path={routerPath.LOGIN} component={LoginPage}/>
          <Route path={routerPath.SIGN_UP} component={SignUpPage}/>

          {
            routesConfig.map((route, i) => (
              <PrivateRoute
                exact={route.exact}
                authenticated={authenticated}
                path={route.path}
                component={route.component}
                key={i}
              />
            ))
          }
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  authenticated: isAuthenticatedSelector(state)
});

export default connect(mapStateToProps)(App);
