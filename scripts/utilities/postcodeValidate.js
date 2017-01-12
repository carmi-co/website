import postcodeCheck from 'postcode';

export const normalisePostcode = (post) => {
    if (!validatePostcode(post)) {
        return null;
    }
    const postcode = new postcodeCheck(post);
    return postcode.normalise();
}

export const validatePostcode = (post) => {
    const postcode = new postcodeCheck(post);
    return postcode.valid();
}

export const outcodePostcode = (post) => {
    if (!validatePostcode(post)) {
        return null;
    }
    const normalised =  normalisePostcode(post);
    const postcode = new postcodeCheck(normalised);
    return  postcode.outcode();
}

