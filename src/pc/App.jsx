import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Main from "./Main.js"
import Spring from "./pages/SpringAsk/index.jsx"
export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" component={Main}>
          </Route>
          <Route path="/Spring" component={Spring}>
          </Route>
          <Route path="/" component={Main}>
          </Route>
        </Switch>
      </Router>
    </>
  )

}