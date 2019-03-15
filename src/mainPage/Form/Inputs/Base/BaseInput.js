import React from 'react';

const BaseInput = props => (
    <>
        <input
            nam="baseSelector"
            type="number"
            placeholder={props.base}
            onChange={event => props.changeHandler(event)}></input>
    </>
);

export default BaseInput;