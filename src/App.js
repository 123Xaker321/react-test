import React from 'react';
import Header from './components/Header'
class App extends React.Component {
  HelloText = "Hello world";
  myOnClick = () => alert("clicked");
  render() {
    return (<div><Header title="Шапка сайта" />
      <h1 onClick={this.myOnClick}>{this.HelloText}</h1>
      <h2>Hello react</h2>
    </div>)
  }
}

export default App