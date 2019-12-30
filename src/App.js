import React, { Component } from 'react';

//리액트야 Subject 라는 이름의 태그를 나는 만들거야
//property => props

class Title extends Component{
  render(){
    return(
      <div id="Title">
        <h1>코딩 공간</h1>
        <h5>HYUM9</h5>
      </div>
    );
  }
}

class Navigation extends Component{
  render(){
    return(
      <div id="Navigation">
        <a href="https://hyum9.github.io/Blog20191228ver2hyum9/src/terms.html">TestIf</a>&nbsp;&nbsp;&nbsp;
        <a href="https://hyum9.github.io/Blog20191228ver2hyum9/">Home</a>&nbsp;&nbsp;&nbsp;
        <hr/>
      </div>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className ="App">
        <Title></Title>
        <Navigation></Navigation>
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
  } 
}
export default App;