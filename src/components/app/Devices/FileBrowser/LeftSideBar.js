import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import './LeftSideBar.css';

class LeftSideBar extends Component {

  render() {
    return (
      <Col xs="2" className="left">
        <div className="left--header">
          Something Something Something
        </div>
        <ul className="left--list">
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </Col>
    );
  }

}

export default LeftSideBar;
