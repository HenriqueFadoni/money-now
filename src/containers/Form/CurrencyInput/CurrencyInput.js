import React from 'react';

const CurrencyInput = props => (
    <>
        <input
            nam="currencyInput"
            type="number"
            placeholder={props.currency}
            readOnly></input>
    </>
);

export default CurrencyInput;