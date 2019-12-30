import React from "react";
import { Link } from "react-router-dom";

export default () =>(
    <div id="MainPage">
        <div id="Title">
            <h1>코딩 공간</h1>
            <h5>HYUM9</h5>
        </div>
        <div id="Navigation">
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/page1">Page1</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/page2">Page2</Link>&nbsp;&nbsp;&nbsp;
            <br/><br/><br/><br/><hr/>
        </div>

        <div id="Body">
            Welcome to Page1
        </div>
    </div>
);