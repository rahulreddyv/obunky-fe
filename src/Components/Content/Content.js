import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import AddListing from '../AddProperty/AddProperty';

export default class SimpleContent extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/newProperty" component={AddListing} exact={true}/>
      </div> 
    );
  }
}
  