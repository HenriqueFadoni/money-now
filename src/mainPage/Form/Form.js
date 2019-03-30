import React, { PureComponent } from 'react';

import FindRate from './Button/FindRate';
import BaseInput from './Inputs/Base/BaseInput';
import CurrencyInput from './Inputs/Currency/CurrencyInput';

class Form extends PureComponent {
    render() {
        let showInputs = (
            <>
                <BaseInput base={this.props.baseValue}/>
                <CurrencyInput currency={this.props.currencyValue} />
            </>
        );

        return (
            <form onSubmit={event => this.props.findRate(event)}>
                {this.props.showInputs ? showInputs : null}
                <FindRate show={this.props.showBtn} />
            </form>
        );
    }
};

export default Form;