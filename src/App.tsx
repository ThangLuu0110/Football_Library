import React, { Component } from "react";
import Header from "./Components/Header/header.component";
import Body from "./Components/Body/body.component";
import "./Styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="library-wrapper">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
