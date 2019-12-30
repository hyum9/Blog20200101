import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home.js";
import Page1 from "./Page1"; //Default Page이다
import Page2 from "./Page2"; //Page2 이다

//Route exact path = URL을 지정해주는 것 
//Component는 해당 URL과 연결되는 페이지를 나타내준다

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/page1" componente={Page1}/>
            <Route exact path="/page2" component={Page2}/>
        </Switch>
    </HashRouter>
);
