import React from 'react';
import { connect } from 'react-redux';

const CurrencyInput = props => (
    <h2 className="h2-green form__result">
        {props.currencyExchange.currencyValue}
    </h2>
);

const mapStateToProps = state => {
    return {
        currencyExchange: state.findRate
    }
}

export default connect(mapStateToProps)(CurrencyInput);