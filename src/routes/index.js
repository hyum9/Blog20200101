import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import ReactReact from "./React/React"; 
import Spring from "./Spring/Spring";
import Home from "./Home"; 

//Route exact path = URL을 지정해주는 것 
//Component는 해당 URL과 연결되는 페이지를 나타내준다

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component = { Home }/>
            <Route exact path="/spring" component= { Spring }/>
            <Route exact path="/react" component= { ReactReact }/>
        </Switch>
    </HashRouter>
);
