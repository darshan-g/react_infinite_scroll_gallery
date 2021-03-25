import React, { Component } from "react";
import Header from "./components/header/header";
import ImageResults from "./components/imageResults/imageResults";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <ImageResults />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
