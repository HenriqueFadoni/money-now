import React from 'react';

const BaseCurrencySelector = props => (
    <select id="base-currency-selector" onChange={event => props.selectHandler(event)} required>
        <option value="" defaultValue>Please Select a Base Currency</option>
        {props.rates}
    </select>
);

export default BaseCurrencySelector;