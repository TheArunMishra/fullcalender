import React, { Component } from "react";
import ReactDOM from "react-dom";



import './App.css';
import EventCalender from './component/EventCalender';

 export default class App extends Component {

  render(){
    return (
       <EventCalender/>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
