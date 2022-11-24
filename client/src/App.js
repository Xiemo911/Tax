import React, { Component } from "react";
import "./App.css";
// import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./Components/Layout/Footer";
// import Home from "./Components/Layout/Home";
// import Social from "./Components/social/Social";

class App extends Component {
  state = {
    isOn: [],
  };
  connecToServer = () => {
    fetch("/");
  };
  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
    
        <div>jhhhjjhhjhjhjj</div>
     
    );
  }
}
export default App;
