import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from '../../../store/reducers/index';

import axios from 'axios';

import { getData, update } from '../../../store/actions/getData';

xdescribe('GetData action creator', () => {
    let store
    beforeEach(() => {
        store = createStore(rootReducer, applyMiddleware(reduxThunk));
    });

    xtest('Fetch Data from API Successfuly', async () => {
        // const { data } = await axios.get('https://api.exchangeratesapi.io/latest');
        // const dataReceived = {
        //     base: 'EUR',
        //     date: '',
        //     rates: data.rates
        // };

        // return store.dispatch(getData())
        //     .then(() => {
        //         const newState = store.getState();
        //         expect(newState.getData.base).toBe('EUR');
        //         expect(newState.getData.rates).toEqual(dataReceived.rates);
        //     });
    });

    xtest('Update State Successfuly', async () => {
        // const initialState = {
        //     base: 'EUR',
        //     date: '',
        //     rates: { 
        //         BGN: 1.3038666667,
        //         NZD: 1.1,
        //         ILS: 2.7176
        //     }
        // }

        // const { data } = await axios.get('https://api.exchangeratesapi.io/latest?base=CAD');
        // const dataReceived = {
        //     ...initialState,
        //     base: data.base,
        //     date: data.date,
        //     rates: data.rates
        // };

        // return store.dispatch(update('CAD', initialState))
        //     .then(() => {
        //         const newState = store.getState();
        //         console.log(newState);
        //         expect(newState.getData).toEqual(dataReceived);
        //     });
    });
});