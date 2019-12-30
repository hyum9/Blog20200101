import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Page1}/>
            <Route exact path="/Page2" component={Page2}/>
        </Switch>
    </HashRouter>
);