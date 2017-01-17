export const INCREASE_VALUE = 'INCREASE_VALUE';

export function increaseValue (value) {
    return {
        type: INCREASE_VALUE, value
    }
}