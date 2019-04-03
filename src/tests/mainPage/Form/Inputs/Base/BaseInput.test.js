import React from 'react';
import { shallow } from 'enzyme';

import BaseInput from '../../../../../mainPage/Form/Inputs/Base/BaseInput';

const setup = (initialState = {}) => {
    const wrapper = shallow(<BaseInput {...initialState} />);
    return wrapper
}

test('Checks if BASEINPUT is receiving the CORRECT OBJECT', () => {
    const wrapper = setup({
        currencyExchange: {
            baseValue: 1
        }
    });
    const BaseInputSuccess = wrapper.instance().props.currencyExchange.baseValue;
    expect(BaseInputSuccess).toBe(1);
});

test('Checks if BASEINPUT is not undefined', () => {
    const wrapper = setup({
        currencyExchange: {
            baseValue: 1
        }
    });
    const BaseInputSuccess = wrapper.instance().props.currencyExchange.baseValue;
    expect(BaseInputSuccess).not.toBe(undefined);
});
