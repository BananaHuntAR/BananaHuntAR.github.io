import React, { Component } from 'react';
import { Navbar, Home, About, Demo, Team } from './components';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/team" component={Team} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
