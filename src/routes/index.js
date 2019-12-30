import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import ReactIndex from "./React/React"; 
import SpringIndex from "./Spring/Spring";
import SpringFramework from "./Spring/SpringFramework";
import Home from "./Home"; 

//Route exact path = URL을 지정해주는 것 
//Component는 해당 URL과 연결되는 페이지를 나타내준다

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component = { Home }/>
            <Route exact path="/spring" component= { SpringIndex }/>
            <Route exact path="/react" component= { ReactIndex }/>
            <Route exact path="/spring/springframework" component={SpringFramework}/>
        </Switch>
    </HashRouter>
);
