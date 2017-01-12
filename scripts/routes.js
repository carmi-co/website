import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App';
import About from './components/About/About';
import Home from './components/Home/Home';
import FindACar from './components/FindACar/FindACar';
import SelectACar from './components/SelectACar/SelectACar';
import React from 'react';

function Routes () {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute to="/" component={Home} />        
            </Route>
            <Route path="/find" component={FindACar} />
            <Route path="/select" component={SelectACar}>
            </Route>
        </Router>
    );
}

export default Routes;