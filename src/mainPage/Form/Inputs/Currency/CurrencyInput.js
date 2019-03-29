import React from 'react';

const CurrencyInput = props => (
    <>
        <input
            name="currencyDisplay"
            type="number"
            className="form__currency-display"
            placeholder={props.currency}
            readOnly></input>
    </>
);

export default CurrencyInput;