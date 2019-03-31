import axios from 'axios';
import * as actionTypes from './actionTypes';

const getDataStart = () => {
    return {
        type: actionTypes.GET_DATA_START
    };
};

const getDataSuccess = currencyExchange => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        currencyExchange
    };
};

const getDataFail = error => {
    return {
        type: actionTypes.GET_DATA_FAIL,
        error: error
    }
}

export const getData = () => {
    return async(dispatch) => {
        dispatch(getDataStart());
        
        try {
            const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=EUR`);
            let update = {
                base: 'EUR',
                toCurrency: null,
                baseValue: 0,
                currencyValue: 0,
                date: '',
                rates: data.rates
            };
    
            dispatch(getDataSuccess(update));
        } catch (error) {
            let errorMessage = 'Something Went Wrong. Try again later'
            dispatch(getDataFail(errorMessage));
        }
    }
}