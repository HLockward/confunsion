import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './component/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;