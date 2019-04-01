import React from 'react';

import FindRate from './Button/FindRate';
import BaseInput from './Inputs/Base/BaseInput';
import CurrencyInput from './Inputs/Currency/CurrencyInput';

const Form = props => {
    let inputs = (
        <>
            <BaseInput />
            <CurrencyInput />
        </>
    );

    return (
        <form onSubmit={event => props.findRate(event)}>
            {props.showInputs ? inputs : null}
            <FindRate show={props.showBtn} />
        </form>
    );
};

export default Form;