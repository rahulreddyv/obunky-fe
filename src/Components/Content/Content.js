import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import AddProperty from '../AddProperty/AddProperty';

export default class SimpleContent extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/addProperty" component={AddProperty} exact={true}/>
      </div> 
    );
  }
}
