import {
    STORE_CAR_PRICE,
    STORE_CAR_SIZE,
    STORE_CAR_TYPE,
    STORE_USER_AGE,
    STORE_USER_EMAIL,
    STORE_USER_NAME,
    STORE_USER_MOBILE,
    STORE_USER_POSTCODE
} from '../actions/findACarActions';

const defaultState = {
                        carPrice: '',
                        carSize: '',
                        carType: '',
                        userAge: '',
                        userPostcode: '',
                        userEmail: '',
                        userName: '',
                        userMobile: '',
                     }

export default (state = defaultState, action) => {
    console.log('action', action.type, action.value);
    switch(action.type) {
        case STORE_CAR_PRICE:
            return {...state, ...{ carPrice: action.value }};
        case STORE_CAR_SIZE:
            return {...state, ...{ carSize: action.value }};
        case STORE_CAR_TYPE:
            return {...state, ...{ carType: action.value }};
        case STORE_USER_AGE:
            return {...state, ...{ userAge: action.value }};
        case STORE_USER_EMAIL:
            return {...state, ...{ userEmail: action.value }};
        case STORE_USER_NAME:
            return {...state, ...{ userName: action.value }};
        case STORE_USER_MOBILE:
            return {...state, ...{ userMobile: action.value }};
        case STORE_USER_POSTCODE:
            return {...state, ...{ userPostcode: action.value }};
        default:
            return state;
    }
}