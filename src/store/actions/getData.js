import axios from 'axios';
import * as actionTypes from './actionTypes';


// -----------------------------------------------
// FETCH DATA FROM THE SERVER AND INITIALIZE THE STATE

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
    return async (dispatch) => {
        dispatch(getDataStart());

        try {
            const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=EUR`);
            let update = {
                base: 'EUR',
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

// ---------------------------------------
// UPDATE THE STATE BASED ON THE CURRENCY

const updateSuccess = currencyExchange => {
    return {
        type: actionTypes.UPDATE_SUCCESS,
        currencyExchange
    }
}

const updateFail = error => {
    return {
        type: actionTypes.UPDATE_FAIL,
        error
    }
}

export const update = (currency, currencyExchange) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`);
            let update = {
                ...currencyExchange,
                base: data.base,
                date: data.date,
                rates: data.rates
            };
            dispatch(updateSuccess(update));
        } catch (error) {
            let errorMessage = 'Something Went Wrong';
            dispatch(updateFail(errorMessage));
        }
    }
}
