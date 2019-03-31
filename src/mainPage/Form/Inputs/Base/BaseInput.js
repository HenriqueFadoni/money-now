import React from 'react';
import { connect } from 'react-redux';

const BaseInput = props => (
    <h2 className="h2-white form__result">
        {props.currencyExchange.baseValue}
    </h2>
);

const mapStateToProps = state => {
    return {
        currencyExchange: state.findRate
    }
}

export default connect(mapStateToProps)(BaseInput);