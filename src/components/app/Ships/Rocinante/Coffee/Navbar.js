import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowLeftB, arrowRightB, beaker, disc } from 'react-icons-kit/ionicons/';
import { coffee } from 'react-icons-kit/typicons/';

import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav>
        <Row className="align-content-stretch">
          <Col className="nav-item"><Icon size={64} icon={arrowLeftB} className="nav-icon" /></Col>
          <Col className="nav-item nav-item--control"><Icon size={64} icon={coffee} className="nav-icon" /></Col>
          <Col className="nav-item nav-item--control"><Icon size={64} icon={beaker} className="nav-icon" /></Col>
          <Col className="nav-item nav-item--control"><Icon size={64} icon={disc} className="nav-icon" /></Col>
          <Col className="nav-item"><Icon size={64} icon={arrowRightB} className="nav-icon" /></Col>
        </Row>
      </nav>
    );
  }

}

export default Navbar;
