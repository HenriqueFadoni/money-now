import React from 'react';

const BaseCurrencySelector = props => (
    <select 
        id="base-currency-selector" 
        className="form__selector"
        onChange={event => props.selectHandler(event)} 
        required>

        <option value="" defaultValue>Select a Currency</option>
        {props.rates}
    </select>
);

export default BaseCurrencySelector;