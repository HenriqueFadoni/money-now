import React from 'react';
import { shallow } from 'enzyme';

import FindRate from '../../../../mainPage/Form/Button/FindRate';

test('Checks if the button WAS rendered after correct action', () => {
    let wrapper;
    wrapper = shallow(<FindRate show={true} />);
    const component = wrapper.find(`[data-test="component-button-able"]`);
    expect(component.length).toBe(1);
});

test('Checks if the button WASNT rendered after incorrect action', () => {
    let wrapper;
    wrapper = shallow(<FindRate show={false} />);
    const component = wrapper.find(`[data-test="component-button-disable"]`);
    expect(component.length).toBe(1);
});