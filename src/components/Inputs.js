import React, { PureComponent } from 'react';

class Inputs extends PureComponent {
    state = {
        base: null,
        currency: null
    }

    baseChangeHandler = event => {
        let newCurrency = this.props.currencyValue * event.target.value;
        newCurrency = Math.round(newCurrency * 100) / 100;
        this.setState({currency: newCurrency});
    }

    render() {
        return (
            <div>
                <input 
                    type="number" 
                    placeholder={this.props.baseValue} 
                    onChange={event => this.baseChangeHandler(event)}></input>
                <input 
                    type="number" 
                    placeholder={!this.state.currency ? this.props.currencyValue : this.state.currency}
                    readOnly></input>
            </div>
        );
    }
};

export default Inputs;