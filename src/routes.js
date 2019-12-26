import React from "react";
import { Switch, Route } from "react-router-dom";
import Wizard1 from './Components/Wizard/Wizard1';
import Wizard2 from './Components/Wizard/Wizard-2';
import Wizard3 from './Components/Wizard/Wizard-3';
import Wizard4 from './Components/Wizard/Wizard-4';
import Wizard5 from './Components/Wizard/Wizard-5';

export default (
  <Switch>
    <Route path='/Wizard/1' component={Wizard1}/>
    <Route path='/Wizard-2' component={Wizard2}/>
    <Route path='/Wizard-3' component={Wizard3}/>
    <Route path='/Wizard-4' component={Wizard4}/>
    <Route path='/Wizard-5' component={Wizard5}/>
  </Switch>
);