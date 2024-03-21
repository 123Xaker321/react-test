import React from 'react';
import Header from './components/Header'
import Button from './components/Button'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      HelloText: "Hello world",
    }
    this.myOnClick = this.myOnClick.bind(this)
  }
  render() {
    return (<div><Header title="Шапка сайта" />
      <h1 onClick={this.myOnClick}>{this.state.HelloText}</h1>
      <h2>Hello react</h2>
      <Button />
      <Button text="натисни на мене"/>
    </div>)
  }
  myOnClick(){
    if(this.state.HelloText === "Hello world"){
    this.setState({HelloText: "You clicked at me :)"})
    }
    else{
      this.setState({HelloText: "Hello world"})
      }
  }
}

export default App