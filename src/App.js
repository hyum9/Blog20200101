import React, { Component } from 'react';

//리액트야 Subject 라는 이름의 태그를 나는 만들거야
//property => props

class Subject extends Component{
render(){
  return (
    <header>
      <h1>WEB</h1>
      World Wide Web
    </header>
    );
  }
}

class TOC extends Component{
  render(){
    return(
        <nav>
          <ol>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
          </ol>
        </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>Welcome</h2>
        Hello React.
      </article>

    );
  }
}

class App extends Component {
  render(){
    return (
      <div className ="App">
        <Subject title="WEB" sub="World wide web"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  } 
}
export default App;