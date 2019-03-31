import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './store/actions/index';

import './sass/main.scss';

import BaseCurrencySelector from './mainPage/Form/Selectors/Base/BaseCurrencySelector';
import ToCurrencySelector from './mainPage/Form/Selectors/Currency/ToCurrencySelector';
import Form from './mainPage/Form/Form';
import BackgroundVideo from './mainPage/BackgroundVideo/BackgroundVideo';

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
    let arrayRates = [];
    let button = false;

    for (let rate in rates) {
      arrayRates.push(
        <option
          value={`${rate}`}
          key={`${rate}`} >
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
          <h1 className="h1-white">
            money <span className="text-green">now</span>
          </h1>

          <section className="form">
            <BaseCurrencySelector
              rates={arrayRates}
              selectHandler={this.selectBaseHandler} />

            <ToCurrencySelector
              rates={arrayRates}
              selectHandler={this.selectToHandler} />

            <div className="form__container">
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