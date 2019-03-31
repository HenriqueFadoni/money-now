import * as actionTypes from './actionTypes';

export const findRateSelect = rate => {
    return {
        type: actionTypes.FIND_RATE_SELECT,
        toCurrency: rate
    };
};

const findRateResult = rateValue => {
    return {
        type: actionTypes.FIND_RATE_RESULT,
        baseValue: 1,
        currencyValue: rateValue
    };
};

export const findRateCalc = rateValue => {
    return dispatch => {
        const value = Math.round(rateValue * 100) / 100;
        dispatch(findRateResult(value));
    };
};