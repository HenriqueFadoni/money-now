import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './store/actions/index';
import axios from 'axios';

import './sass/main.scss';

import BaseCurrencySelector from './mainPage/Form/Selectors/Base/BaseCurrencySelector';
import ToCurrencySelector from './mainPage/Form/Selectors/Currency/ToCurrencySelector';
import Form from './mainPage/Form/Form';
import BackgroundVideo from './mainPage/BackgroundVideo/BackgroundVideo';

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

  componentDidMount() {
    this.props.onGetData();
  };

  selectBaseHandler = event => this.getData(event.target.value);

  getData = async (currency) => {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`); // ANOTHER
    let update = {
      ...this.props.currencyExchange,
      base: data.base,
      date: data.date,
      rates: data.rates
    };
    this.setState({ currencyExchange: update });
  }

  selectToHandler = event => {
    let update = {
      ...this.props.currencyExchange,
      toCurrency: event.target.value
    };
    this.setState({ currencyExchange: update });
  };

  findRate = event => {
    event.preventDefault();
    event.currentTarget.reset();

    const value = Math.round(this.props.currencyExchange.rates[this.props.currencyExchange.toCurrency] * 100) / 100;
    let update = {
      ...this.state,
      currencyExchange: {
        ...this.props.currencyExchange,
        baseValue: 1,
        currencyValue: value
      },
      showInput: true
    };

    this.setState(update);
  }

  render() {
    const rates = this.props.currencyExchange.rates;
    console.log(rates)
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

    if (this.props.currencyExchange.base !== "" && this.props.currencyExchange.toCurrency) {
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
                baseValue={this.props.currencyExchange.baseValue}
                currencyValue={this.props.currencyExchange.currencyValue}
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
    currencyExchange: state.getData.currencyExchange,
    error: state.getData.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetData: () => dispatch(action.getData())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);