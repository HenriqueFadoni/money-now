import React from 'react';

const ToCurrencySelector = props => (
    <select id="to-currency-selector" onChange={event => props.selectHandler(event)} required>
        <option value="" defaultValue>Please Select a Currency to Convert</option>
        {props.rates}
    </select>
);

export default ToCurrencySelector;