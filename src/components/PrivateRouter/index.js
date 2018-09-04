import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { routerPath } from '../../constants/router/path.const';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: routerPath.LOGIN,
            state: { from: props.location },
          }}
        />
      )
    )
    }
  />
);

export default PrivateRoute;
