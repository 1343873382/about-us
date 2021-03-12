import { HashRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Main from "./Main.js"
import Spring from "./pages/SpringAsk/index.jsx"
import MobileSpring from "../mobile/components/mobileSpringAsk/index.jsx"
import Mobile from "../mobile/App"
const IsPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
export const App = () => {
  if (IsPC()) {
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
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/Spring" component={MobileSpring}>
          </Route>
          <Route path="/" component={Mobile}>
          </Route>
        </Switch>
      </Router>
    )
  }


}