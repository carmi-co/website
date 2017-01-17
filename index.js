import { render } from 'react-dom';
import Routes from './scripts/routes';
import React from 'react';
import configStore from './scripts/store/configStore';
import {Provider} from 'react-redux';

const store = configStore();
render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);
