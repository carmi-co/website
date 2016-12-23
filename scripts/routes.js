import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App';
import About from './components/About/About';
import Home from './components/Home/Home';

import React from 'react';

function Routes () {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
        </Router>
    );
}

export default Routes;