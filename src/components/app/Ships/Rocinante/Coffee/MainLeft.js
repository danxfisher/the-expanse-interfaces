import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowLeftB, arrowRightB } from 'react-icons-kit/ionicons/';

import './MainLeft.css';

class MainLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBeansScreen: false
    }
  }

  toggle = () => {
    this.setState({
      showBeansScreen: !this.state.showBeansScreen
    }, () => this.toggleBackgroundColor())
  }

  toggleBackgroundColor = () => {

  }

  render() {
    const {showBeansScreen} = this.state;
    return (
      <Col xs={7} className={'left-item ' + (showBeansScreen ? 'beans' : 'start')}>
        {!showBeansScreen ?
          <Row className="align-items-stretch circle-margin">
            <Col className="align-self-center">
              <Icon size={140} icon={arrowLeftB} onClick={this.toggle} />
            </Col>
            <Col xs={6} className="circle-col align-self-center">
              <div className="circle-wrap">
                <div className="circle">
                  Start
                </div>
              </div>
            </Col>
            <Col className="align-self-center">
              <Icon size={140} icon={arrowRightB} onClick={this.toggle} />
            </Col>
          </Row>
        :
          <Row className="align-items-stretch beans-border">
            <Col className="align-self-center">
              <Icon size={140} icon={arrowLeftB} onClick={this.toggle} />
            </Col>
            <Col xs={6} className="beans-col align-self-center">
              <div className="beans-wrap">
                <div className="beans-text">
                  Add Coffee Beans
                </div>
              </div>
            </Col>
            <Col className="align-self-center">
              <Icon size={140} icon={arrowRightB} onClick={this.toggle} />
            </Col>
          </Row>
        }
      </Col>
    );
  }

}

export default MainLeft;
