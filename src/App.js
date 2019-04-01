import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './store/actions/index';

import Title from './mainPage/Title/Title';
import BackgroundVideo from './mainPage/BackgroundVideo/BackgroundVideo';
import BaseCurrencySelector from './mainPage/Form/Selectors/Base/BaseCurrencySelector';
import ToCurrencySelector from './mainPage/Form/Selectors/Currency/ToCurrencySelector';
import Form from './mainPage/Form/Form';
import './sass/main.scss';

class App extends Component {
  state = {
    showInput: false
  }

  componentDidMount() {
    this.props.onGetData();
  };

  selectBaseHandler = event => {
    this.props.onUpdate(event.target.value, this.props.baseExchange);
  }

  selectToHandler = event => {
    this.props.onFindRateSelect(event.target.value);
  };

  findRate = event => {
    event.preventDefault();
    event.currentTarget.reset();

    this.props.onFindRateCalc(this.props.baseExchange.rates[this.props.currencyExchange.toCurrency]);

    this.setState({ showInput: true });
  }

  render() {
    const rates = this.props.baseExchange.rates;
    let button = false;
    let arrayRates = [];

    for (let rate in rates) {
      arrayRates.push(
        <option
          value={rate}
          key={rate}>
          {rate}
        </option>
      );
    }

    if (this.props.currencyExchange.toCurrency) {
      button = true;
    }

    return (
      <>
        <BackgroundVideo />

        <div className="home">
          <Title />

          <section className="form">
            <BaseCurrencySelector
              rates={arrayRates}
              selectHandler={this.selectBaseHandler} />

            <ToCurrencySelector
              rates={arrayRates}
              selectHandler={this.selectToHandler} />

            <div className="form__display">
              <Form
                findRate={this.findRate}
                showInputs={this.state.showInput}
                showBtn={button} />
            </div>
          </section>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseExchange: state.getData,
    currencyExchange: state.findRate,
    error: state.getData.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetData: () => dispatch(action.getData()),
    onUpdate: (currency, baseExchange) => dispatch(action.update(currency, baseExchange)),
    onFindRateSelect: rate => dispatch(action.findRateSelect(rate)),
    onFindRateCalc: rate => dispatch(action.findRateCalc(rate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);