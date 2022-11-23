import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styled from 'styled-components';

// When calculating testing coverage, the following lines tells Jest to ignore the line after it
/* istanbul ignore next */
ReactDOM.render(<App />, document.getElementById('root'));
