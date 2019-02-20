import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faKey)

import listSnapshot from "./pages/listSnapshot";
import createSnapshot from "./pages/createSnapshot";
import deleteSnapshot from "./pages/deleteSnapshot";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="createSnapshot" component={createSnapshot}></Route>
      <Route path="listSnapshot" component={listSnapshot}></Route>
      <Route path="settings" component={Settings}></Route>
      <Route path="deleteSnapshot" component={deleteSnapshot}></Route>
    </Route>
  </Router>,
app);
