import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { waterdrop, power } from 'react-icons-kit/ionicons/';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer>
        <Row className="align-content-stretch">
          <Col xs="6" className="footer-item self-align-center">
            <div className="footer-select">Select Coffee</div>
          </Col>
          <Col className="footer-item footer-item--waterdrop self-align-center">
            <Icon size={64} icon={waterdrop} className="footer-icon" />
          </Col>
          <Col className="footer-item self-align-center">
            <Icon size={64} icon={power} className="footer-icon" />
          </Col>
        </Row>
      </footer>
    );
  }

}

export default Footer;
