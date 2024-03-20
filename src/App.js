import React from 'react';
import Header from './components/Header'
  class App extends React.Component{
    myOnClick = () => alert("clicked");
    render(){
    return (<div><Header title="Шапка сайта"/>
      <h1 onClick = {this.myOnClick}>Hello world</h1>
      <h2>Hello react</h2>
      </div>)
    }
  }

export default App