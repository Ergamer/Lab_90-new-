import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import AllFilmsView from "./containers/AllFilmsView/AllFilmsView";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Orders from "./containers/Orders/Orders";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={AllFilmsView}/>
            <Route path="/" exact component={Orders}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
