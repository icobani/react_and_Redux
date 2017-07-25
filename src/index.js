/**
 * Created by ibrahimcobani on 21/07/2017.
 */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/bower_components/font-awesome/css/font-awesome.css';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);
