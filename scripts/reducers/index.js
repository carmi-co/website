import { combineReducers } from 'redux';
import counter from './counterReducer';
import findACar from './findACarReducer';


const rootReducer = combineReducers({
    counter,
    findACar
});

export default rootReducer;