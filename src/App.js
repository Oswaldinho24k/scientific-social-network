import React, { Component } from 'react';
import {Routes} from './Routes';
import Nav from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#eceff1", minHeight:"100vh"}}>
          <Nav/>
          <div className="margin-for-nav">
              <Routes/>
          </div>

          
      </div>
    );
  }
}

export default App;
