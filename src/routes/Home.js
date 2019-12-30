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
        2019-12-29 To Do <br/>
          <ul>
            <li>"React로 블로그 만드는 방법 github server에 올려서 실행시켜 보기"에 관한 설명서 블로그에 올리기</li>
            <li>블로그에 Github Repository 주소 삽입</li>
            <li>Spring Framework에 관한 조사</li>
            <li>읽어야 할 책 목록</li>
          </ul>
    </div>
    </div>
);