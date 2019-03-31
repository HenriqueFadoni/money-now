import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currencyExchange: {
        base: '',
        toCurrency: null,
        baseValue: 0,
        currencyValue: 0,
        date: '',
        rates: {}
    },
    showInput: false
}

const getDataStart = state => {
    return {
        ...state
    };
};

const getDataSuccess = (state, action) => {
    return {
        ...state,
        currencyExchange: action.currencyExchange
    };
};

const getDataFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_DATA_START: return getDataStart(state);
        case actionTypes.GET_DATA_SUCCESS: return getDataSuccess(state, action);
        case actionTypes.GET_DATA_FAIL: return getDataFail(state, action);
        default: return state;
    }
}

export default reducer;