import * as actionTypes from './actionTypes';

export const findRateSelect = rate => {
  return {
    type: actionTypes.FIND_RATE_SELECT,
    toCurrency: rate
  };
};