import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App';
import About from './components/About/About';
import Home from './components/Home/Home';
import FindACar from './components/FindACar/FindACar';

import React from 'react';

function Routes () {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute to="/" component={Home} />        
            </Route>
            <Route path="/find" component={FindACar} >
                <Route />
            </Route>
        </Router>
    );
}

export default Routes;