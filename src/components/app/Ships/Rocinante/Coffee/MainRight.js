import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { arrowUpB, arrowDownB } from 'react-icons-kit/ionicons/';

import './MainRight.css';

class MainRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      plural: false
    }
  }

  incrementCount = () => {
    if(this.state.count < 9) {
      this.setState({
        count: this.state.count + 1
      }, () => this.handlePlural());
    }
    else {
      this.setState({
        count: 1
      }, () => this.handlePlural());
    }
  }

  decrementCount = () => {
    if(this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      }, () => this.handlePlural());
    }
    else {
      this.setState({
        count: 1
      }, () => this.handlePlural());
    }
  }

  handlePlural = () => {
    if(this.state.count > 1) {
      this.setState({
        plural: true
      });
    }
    else {
      this.setState({
        plural: false
      });
    }
  }

  render() {
    const {count, plural} = this.state;

    return (
      <Col className="right-item">
        <Row className="arrow-up">
          <Col className="icon align-items-self">
            <Icon size={140} icon={arrowUpB} onClick={this.incrementCount} />
          </Col>
        </Row>
        <Row className="cup-row">
          <Col className="cup-col align-items-center">
            <div className="cup">
              <div className="cup-body">
                <div className="cup-text">
                  <h1>{count}</h1>
                  <p>Cup{plural ? 's' : ''}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="arrow-down">
          <Col className="icon align-items-self">
            <Icon size={140} icon={arrowDownB} onClick={this.decrementCount} />
          </Col>
        </Row>
      </Col>
    );
  }

}

export default MainRight;
