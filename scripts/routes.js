import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App';
import About from './components/About/About';
import Home from './components/Home/Home';
import FindACarContainer from './containers/FindACarContainer';
import SelectACar from './components/SelectACar/SelectACar';
import FindACarSizeStep from './components/FindACarSizeStep/FindACarSizeStep';
import FindACarCostStep from './components/FindACarCostStep/FindACarCostStep';
import React from 'react';
import FindACarVehicleTypeStep from './components/FindACarVehicleTypeStep/FindACarVehicleTypeStep';
import FindACarAgeStep from './components/FindACarAgeStep/FindACarAgeStep';
import FindACarPostcodeStep from './components/FindACarPostcodeStep/FindACarPostcodeStep';
import FindACarEmailStep from './components/FindACarEmailStep/FindACarEmailStep';
import FindACarUsernameStep from './components/FindACarUsernameStep/FindACarUsernameStep';
import FindACarMobileNumberStep from './components/FindACarMobileNumberStep/FindACarMobileNumberStep';
import FindACarFinalStep from './components/FindACarFinalStep/FindACarFinalStep';


function Routes (props) {
    return (
            <Router history={browserHistory}>
                <Route path="/" component={App} >
                    <IndexRoute to="/" component={Home} />        
                </Route>
                <Route path="/find" component={FindACarContainer}>
                    <Route path="carcost" component={FindACarCostStep}/>
                    <Route path="carsize" component={FindACarSizeStep}/>
                    <Route path="cartype" component={FindACarVehicleTypeStep}/>
                    <Route path="userage" component={FindACarAgeStep}/>                    
                    <Route path="userpostcode" component={FindACarPostcodeStep}/>                    
                    <Route path="useremail" component={FindACarEmailStep}/>                    
                    <Route path="username" component={FindACarUsernameStep}/>     
                    <Route path="usermobilenumber" component={FindACarMobileNumberStep}/>            
                    <Route path="thankyou" component={FindACarFinalStep}/>                                        
                </Route>
                <Route path="/select" component={ SelectACar }>
                </Route>
            </Router>
    );
}

export default Routes;

//<IndexRoute path="/" component={ FindACarSizeStep } /> */}
// <Route path="/find/FindACarSizeStep" component={FindACarSizeStep}/>     

                 // <Route path="carcost" component={FindACarCostStep}/>
                    // <Route path="carsize" component={FindACarSizeStep}/>
                    // <Route path="cartype" component={FindACarVehicleTypeStep}/>
                    // <Route path="userage" component={FindACarAgeStep}/>                    
                    // <Route path="userpostcode" component={FindACarPostcodeStep}/>                    
                    // <Route path="useremail" component={FindACarEmailStep}/>                    
                    // <Route path="username" component={FindACarUsernameStep}/>                    
                    // <Route path="usermobilenumber" component={FindACarMobileNumberStep}/>                    
                    // <Route path="thankyou" component={FindACarFinalStep}/>        
