import { combineReducers } from 'redux';

import getData from './getData';
import findRate from './findRate';

export const rootReducer = combineReducers ({
    getData: getData,
    findRate: findRate
});