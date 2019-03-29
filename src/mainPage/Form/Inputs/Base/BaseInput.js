import React from 'react';

const BaseInput = props => (
    <>
        <input
            name="currencyInput"
            type="number"
            className="form__currency-input"
            placeholder={props.base}
            onChange={event => props.changeHandler(event)}></input>
    </>
);

export default BaseInput;