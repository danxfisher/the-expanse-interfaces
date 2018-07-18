import React, { Component } from 'react';

import Main from './Main';
import Navbar from './Navbar';
import Footer from './Footer';

import './CoffeeDisplay.css';

class CoffeeDisplay extends Component {

  render() {
    return (
      <section id="roci__coffee">
        <Navbar />
        <Main />
        <Footer />
      </section>
    );
  }

}

export default CoffeeDisplay;
