import postcodeCheck from 'postcode';

export const validatePostcode = (post) => {
    const postcode = new postcodeCheck(post);
    return postcode.valid();
}