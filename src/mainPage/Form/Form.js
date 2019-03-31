import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


import FindRate from './Button/FindRate';
import BaseInput from './Inputs/Base/BaseInput';
import CurrencyInput from './Inputs/Currency/CurrencyInput';

class Form extends PureComponent {
    render() {
        let inputs = (
            <>
                <BaseInput />
                <CurrencyInput />
            </>
        );

        return (
            <form onSubmit={event => this.props.findRate(event)}>
                {this.props.showInputs ? inputs : null}
                <FindRate show={this.props.showBtn} />
            </form>
        );
    }
};



export default Form;