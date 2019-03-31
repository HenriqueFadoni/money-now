import * as actionTypes from '../actions/actionTypes';

const initialState = {
    base: '',
    date: '',
    rates: {}
}

//GET DATA
const getDataStart = state => {
    return {
        ...state
    };
};

const getDataSuccess = (state, action) => {
    return {
        ...state,
        ...action.currencyExchange
    };
};

const getDataFail = (state, action) => {
    return {
        ...state,
        error: action.error
    };
};

//UPDATE
const updateSuccess = (state, action) => {
    return {
        ...state,
        ...action.currencyExchange
    };
};

const updateFail = (state, action) => {
    return {
        ...state,
        error: action.error
    };
};

//REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_DATA_START: return getDataStart(state);
        case actionTypes.GET_DATA_SUCCESS: return getDataSuccess(state, action);
        case actionTypes.GET_DATA_FAIL: return getDataFail(state, action);
        case actionTypes.UPDATE_SUCCESS: return updateSuccess(state, action);
        case actionTypes.UPDATE_FAIL: return updateFail(state, action);
        default: return state;
    }
}

export default reducer;