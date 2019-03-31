import * as actionTypes from '../actions/actionTypes';

const initialState = {
    toCurrency: null,
    baseValue: 0,
    currencyValue: 0
}

const findRateSelect = (state, action) => {
    return {
        ...state,
        toCurrency: action.toCurrency
    }
}

const findRateResult = (state, action) => {
    return {
        ...state,
        baseValue: action.baseValue,
        currencyValue: action.currencyValue
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FIND_RATE_SELECT: return findRateSelect(state, action);
        case actionTypes.FIND_RATE_RESULT: return findRateResult(state, action);
        default: return state;
    }
}

export default reducer;