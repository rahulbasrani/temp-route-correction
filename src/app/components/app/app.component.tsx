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
        <Link to="/"> 1 </Link>
        <Link to="/1/2">1/2</Link>
        <Link to="/users/2">users/2</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={UsersComponent} />
        <Route path="/1/2" component={HomeComponent} />
        <Route path="/users/2" component={HomeComponent} />
      </Switch>
    </Router>
  );
};

export default App;
