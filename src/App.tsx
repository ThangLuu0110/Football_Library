import React, { Component } from 'react';
import Header from './Components/Header/header.component';
import Body from './Components/Body/body.component';
import Footer from './Components/Footer/footer.component';
import './Styles/main.scss';

class App extends Component {
  render(){
    return (
      <div className="library-wrapper">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
