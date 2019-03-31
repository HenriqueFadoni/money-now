import React from 'react';

const ToCurrencySelector = props => (
    <select 
        id="to-currency-selector" 
        className="form__selector"
        onChange={event => props.selectHandler(event)}
        required>

        <option value="Default">Select a Currency</option>
        {props.rates}
    </select>
);

export default ToCurrencySelector;