// IMPORTS
import mockStore from 'store';
import mockAxios from 'axios';

import { getData } from '../../../store/actions/getData';

// TESTS
describe('GetData Action Creator', () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    test('Fetch Data as soon as the APP runs', async () => {
        // SETUP

        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    base: "EUR",
                    data: "2019-04-04",
                    rates: {
                        "CAD": 1.565,
                        "CHF": 1.1798,
                        "GBP": 0.87295,
                        "SEK": 10.2983
                    }
                }
            })
        );

        // WORK
        let data

        await store.dispatch(getData());
        const action = store.getActions().find(action => action.type === "GET_DATA_SUCCESS");
        if (action) {
            data = await Promise.resolve(action);
        }

        // EXPECT
        
        expect(data).toEqual({
            type: "GET_DATA_SUCCESS",
            currencyExchange: {
                base: "EUR",
                data: "2019-04-04",
                rates: {
                    "CAD": 1.565,
                    "CHF": 1.1798,
                    "GBP": 0.87295,
                    "SEK": 10.2983
                }
            }
        });

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith("https://api.exchangeratesapi.io/latest");
    });
});