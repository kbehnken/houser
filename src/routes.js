import React from "react";
import { Switch, Route } from "react-router-dom";
import Wizard1 from "./Components/Wizard/Wizard1";
import Wizard2 from "./Components/Wizard/Wizard2";
import Wizard3 from "./Components/Wizard/Wizard3";
import Wizard4 from "./Components/Wizard/Wizard4";
import Wizard5 from "./Components/Wizard/Wizard5";

export default (
  <Switch>
    <Route exact path="/" component={Wizard1}/>
    <Route path="/Wizard2" component={Wizard2}/>
    <Route path="/Wizard3" component={Wizard3}/>
    <Route path="/Wizard4" component={Wizard4}/>
    <Route path="/Wizard5" component={Wizard5}/>
  </Switch>
);