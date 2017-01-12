import emailValidator from 'email-validator';

export const emailValidate = (userEmail) => {
    return emailValidator.validate(userEmail);
}