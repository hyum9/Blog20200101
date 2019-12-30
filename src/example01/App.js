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


class App extends Component {
  render(){
    return (
      <div className ="App">
        <Title></Title>
      </div>
    );
  } 
}
export default App;