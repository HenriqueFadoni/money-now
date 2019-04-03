import React from 'react';
import { shallow } from 'enzyme';

import Form from '../../../../mainPage/Form/Form';
import BaseInput from '../../../../mainPage/Form/Inputs/Base/BaseInput';

describe('Form displaying correctly BaseInput and CurrencyInput', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = { showInputs: true };
        wrapper = shallow(<Form {...initialState} />);
    });

    test('BaseInput should be rendered', () => {
        const component = wrapper.find(BaseInput);
        expect(component.length).toBe(1);
    });
    
    test('CurrencyInput should be rendered', () => {
        const component = wrapper.find(BaseInput);
        expect(component.length).toBe(1);
    });
});