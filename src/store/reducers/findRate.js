import * as actionTypes from '../actions/actionTypes';

const initialState = {
    toCurrency: null,
    baseValue: 0,
    currencyValue: 0
}

export const findRateSelect = (state, action) => {
    return {
        ...state,
        toCurrency: action.toCurrency
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FIND_RATE_SELECT: return findRateSelect(state, action);
        default: return state;
    }
}

export default reducer;