export const STORE_CAR_PRICE = 'STORE_CAR_PRICE';
export const STORE_CAR_SIZE = "STORE_CAR_SIZE";
export const STORE_CAR_TYPE = "STORE_CAR_TYPE";
export const STORE_USER_AGE = "STORE_USER_AGE";
export const STORE_USER_EMAIL = "STORE_USER_EMAIL";
export const STORE_USER_NAME = "STORE_USER_NAME";
export const STORE_USER_MOBILE = "STORE_USER_MOBILE";
export const STORE_USER_POSTCODE = "STORE_USER_POSTCODE";

export function storeCarPrice (value) {
    return {
        type: STORE_CAR_PRICE, value
    }
}

export function storeCarSize (value) {
    return {
        type: STORE_CAR_SIZE, value
    }
}

export function storeCarType (value) {
    return {
        type: STORE_CAR_TYPE, value
    }
}

export function storeUserAge (value) {
    return {
        type: STORE_USER_AGE, value
    }
}

export function storeUserEmail (value) {
    return {
        type: STORE_USER_EMAIL, value
    }
}

export function storeUserName (value) {
    return {
        type: STORE_USER_NAME, value
    }
}

export function storeUserMobile (value) {
    return {
        type: STORE_USER_MOBILE, value
    }
}

export function storeUserPostcode (value) {
    return {
        type: STORE_USER_POSTCODE, value
    }
}