import React, { PureComponent } from 'react';

import FindRate from './FindRate';

class Inputs extends PureComponent {
    state = {
        base: null,
        currency: null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.baseValue !== this.props.baseValue || prevProps.currencyValue !== this.props.currencyValue) {
            this.setState({
                base: this.props.baseValue,
                currency: this.props.currencyValue
            });
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
                <input
                    nam="baseSelector"
                    type="number"
                    placeholder={this.props.baseValue}
                    onChange={event => this.baseChangeHandler(event)}></input>
                    
                <input
                    nam="currencySelector"
                    type="number"
                    placeholder={!this.state.currency ? this.props.currencyValue : this.state.currency}
                    readOnly></input>
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

export default Inputs;