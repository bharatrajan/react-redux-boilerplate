import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import store from './utils/store';
import { Provider } from 'react-redux';

import MainContainer from './components/MainContainer/MainContainer';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainContainer />
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
//registerServiceWorker();
