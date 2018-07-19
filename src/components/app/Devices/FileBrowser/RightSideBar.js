import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import './RightSideBar.css';

class RightSideBar extends Component {

  render() {
    return (
      <Col xs="3" className="right">
        <div className="main--header">
          Something Something Something
        </div>
        <Container fluid>
          <Row>
            <Col>
              <div className="right-item right-item--first green-bg">
                s
              </div>
              <div className="right-item--separator"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="right-item right-item--bulk green-bg">
                s
              </div>
              <div className="right-item--separator"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="right-item right-item--bulk right-item--bulk mustard-bg">
                s
              </div>
              <div className="right-item--separator"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="right-item right-item--bulk green-bg">
                s
              </div>
              <div className="right-item--separator"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="right-item right-item--bulk mustard-bg">
                s
              </div>
              <div className="right-item--separator"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="right-item right-item--bulk blue-bg">
                s
              </div>
              <div className="right-item--separator"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="right-item right-item--bulk green-bg">
                s
              </div>
              <div className="right-item--separator"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="right-item right-item--last green-bg">
                s
              </div>
            </Col>
          </Row>
        </Container>

      </Col>
    );
  }

}

export default RightSideBar;
