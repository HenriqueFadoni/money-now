import React, { Component } from 'react';
import axios from 'axios';
import './sass/main.scss';

import BaseCurrencySelector from './mainPage/Form/Selectors/Base/BaseCurrencySelector';
import ToCurrencySelector from './mainPage/Form/Selectors/Currency/ToCurrencySelector';
import Form from './mainPage/Form/Form';

class App extends Component {
  state = {
    currencyExchange: {
      base: '',
      toCurrency: null,
      baseValue: 0,
      currencyValue: 0,
      date: '',
      rates: {}
    },
    showInput: false
  }

  async componentDidMount() {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.currencyExchange.base}`); // ANOTHER
    let update = {
      ...this.state.currencyExchange,
      rates: data.rates
    };
    this.setState({ currencyExchange: update });
  };

  selectBaseHandler = event => this.getData(event.target.value);

  getData = async (currency) => {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`); // ANOTHER
    let update = {
      ...this.state.currencyExchange,
      base: data.base,
      date: data.date,
      rates: data.rates
    };
    this.setState({ currencyExchange: update });
  }

  selectToHandler = event => {
    let update = {
      ...this.state.currencyExchange,
      toCurrency: event.target.value
    };
    this.setState({ currencyExchange: update });
  };

  findRate = event => {
    event.preventDefault();
    event.currentTarget.reset();

    const value = Math.round(this.state.currencyExchange.rates[this.state.currencyExchange.toCurrency] * 100) / 100;
    let update = {
      ...this.state,
      currencyExchange: {
        ...this.state.currencyExchange,
        baseValue: 1,
        currencyValue: value
      },
      showInput: true
    };

    this.setState(update);
  }

  render() {
    const rates = this.state.currencyExchange.rates;
    let arrayRates = [];
    let button = false;

    for (let rate in rates) {
      arrayRates.push(
        <option
          value={`${rate}`}
          key={`${rate}`} > {rate} </option>);
    }

    if (this.state.currencyExchange.base !== "" && this.state.currencyExchange.toCurrency) button = true;

    return (
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
              baseValue={this.state.currencyExchange.baseValue}
              currencyValue={this.state.currencyExchange.currencyValue}
              currencyCoin={this.state.currencyExchange.toCurrency}
              baseCoin={this.state.currencyExchange.base}
              findRate={this.findRate}
              showInputs={this.state.showInput}
              showBtn={button} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;