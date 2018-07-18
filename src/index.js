import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/app/App';
import CoffeeDisplay from './components/app/Ships/Rocinante/Coffee/CoffeeDisplay';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/ships/rocinante/coffee" component={CoffeeDisplay} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
