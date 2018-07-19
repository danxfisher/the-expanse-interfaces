import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import LeftSideBar from './LeftSideBar';
import Main from './Main';
import RightSideBar from './RightSideBar';

import './FileBrowserDisplay.css';

class FileBrowserDisplay extends Component {

  render() {
    return (
      <section id="dev__file-browser--mao">
        <div className="browser-container">
          <Container fluid className="full-height">
            <Row className="align-content-stretch full-height">
              <LeftSideBar />
              <Main />
              <RightSideBar />
            </Row>
          </Container>
        </div>
      </section>
    );
  }

}

export default FileBrowserDisplay;
