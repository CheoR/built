import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Form } from './forms/Form';
import { Success } from './pages/Success';


export const LandingPage = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/loan-application" />
        </Route>
        <Route exact path="/loan-application">
        <Form />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>

    </>
  );
};