import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/Home';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <IndexRoute component={Home}/>
    <Route path="/" component={App} >
      <Route path="/home" component={Home}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
