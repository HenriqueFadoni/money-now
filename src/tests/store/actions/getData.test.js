// IMPORTS
import configureMockStore from "redux-mock-store";
import reduxThunk from 'redux-thunk';

import { getData, update } from '../../../store/actions/getData';

// MOCKING STORE

export const mockStore = configureMockStore([reduxThunk]);

// FINDING SIMILAR ACTIONS ON THE STORE

export function getAction(store, type) {
    const action = store.getActions().find(action => action.type === type);
    if (action) return Promise.resolve(action);

    return new Promise(resolve => {
        store.subscribe(() => {
            const action = store.getActions().find(action => action.type === type);
            if (action) resolve(action);
        });
    });
}

// ACTUAL TESTS

describe('GetData Action Creator', () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    // Making a shallow comparison between the Objects once their values can change.
    test('Fetch Data as soon as the APP runs', async () => {
        store.dispatch(getData());
        expect(await getAction(store, "GET_DATA_START")).toEqual({ type: "GET_DATA_START" });
        expect(await getAction(store, "GET_DATA_SUCCESS")).toMatchObject({
            type: "GET_DATA_SUCCESS",
            currencyExchange: {
                base: "EUR",
                rates: {}
            }
        });
    });

    // Making a shallow comparison between the two Objects received once their value can change
    test('Update State Successfuly when a search is done', async () => {
        store.dispatch(update('CAD', {}));
        expect(await getAction(store, "UPDATE_SUCCESS")).toMatchObject({
            type: "UPDATE_SUCCESS",
            currencyExchange: {
                base: "CAD",
                rates: {}
            }
        })
    });
});