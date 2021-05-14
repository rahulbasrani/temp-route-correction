import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { UsersComponent, HomeComponent } from "@components";
import { PrivateRoute } from "@hoc";
import { DIContext, getDependencies } from "@helpers";

import "./app.styles.css";
const App = (): JSX.Element => {
  return (
    <Router>
      <nav>
        <Link to="/1"></Link>
        <Link to="/1/2"></Link>
        <Link to="/users/2">n</Link>
      </nav>
      <Switch>
        <Route exact path="/1" component={HomeComponent} />
        <Route path="/1/2" component={UsersComponent} />
        <Route path="/users/2" component={UsersComponent} />
      </Switch>
    </Router>
  );
};

export default App;
