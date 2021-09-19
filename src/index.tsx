import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { LandingPage } from './components/LandingPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <LandingPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);