import React, { PureComponent } from 'react';

import FindRate from './Button/FindRate';
import BaseInput from './Inputs/Base/BaseInput';
import CurrencyInput from './Inputs/Currency/CurrencyInput';

class Form extends PureComponent {
    state = {
        base: null,
        currency: null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.baseCoin !== this.props.baseCoin || prevProps.currencyCoin !== this.props.currencyCoin) {
            this.setState({
                base: this.props.baseValue,
                currency: this.props.currencyValue
            });
        } else if (prevProps.baseValue !== this.props.baseValue || prevProps.currencyValue !== this.props.currencyValue) {
            this.setState({
                base: this.props.baseValue,
                currency: this.props.currencyValue
            });
        } else {
            return
        }
    }

    baseChangeHandler = event => {
        let newCurrency = this.props.currencyValue * event.target.value;
        newCurrency = Math.round(newCurrency * 100) / 100;
        this.setState({ currency: newCurrency });
    }

    render() {
        let showInputs = (
            <>
                <BaseInput 
                    base={this.props.baseValue}
                    changeHandler={this.baseChangeHandler}/>
                <CurrencyInput 
                    currency={this.state.currency} />
            </>
        );

        return (
            <div>
                <form onSubmit={event => this.props.findRate(event)}>
                    {this.props.showInputs ? showInputs : null}
                    <FindRate show={this.props.showBtn} />
                </form>
            </div>
        );
    }
};

export default Form;