import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DeckCreator from './DeckCreator';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'

const history = createHistory()

const routing = (
  <Router basename="#">
      <Route exact path="/" component={App} />
      <Route path="/deck-creator" component={DeckCreator} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
