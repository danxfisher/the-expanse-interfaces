import React from 'react';
import { Row } from 'reactstrap';

import MainLeft from './MainLeft';
import MainRight from './MainRight';

import './Main.css';

const Main = () => (
  <main>
    <Row className="main-controls">
      <MainLeft />
      <MainRight />
    </Row>
  </main>
);

export default Main;
