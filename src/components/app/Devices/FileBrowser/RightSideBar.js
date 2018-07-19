import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import './RightSideBar.css';

class RightSideBar extends Component {

  render() {
    return (
      <Col xs="3" className="col-tester3">
        <div className="main--header">
          Something Something Something
        </div>
        <ul className="main--list">
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>

      </Col>
    );
  }

}

export default RightSideBar;
