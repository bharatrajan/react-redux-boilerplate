import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'

import MainContainer from './MainContainer/MainContainer';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><MainContainer /></BrowserRouter>, document.getElementById('root'));
//registerServiceWorker();
