/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/index';
import Signup from './pages/signup';
import { Layout } from './Layout/index';
import Dashboard from './pages/dashboard/index';

const Main = (props) => {
  return (
    <Layout {...props}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default Main;
