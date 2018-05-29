import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import AllFilmsView from "./containers/AllFilmsView/AllFilmsView";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={AllFilmsView}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
