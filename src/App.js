import React, { Component } from 'react';
import axios from 'axios';

import BaseCurrencySelector from './components/BaseCurrencySelector';
import ToCurrencySelector from './components/ToCurrencySelector';
import Inputs from './components/Inputs';

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

  findRate = () => {
    if (this.state.currencyExchange.base !== "" && this.state.currencyExchange.toCurrency ) {
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
  }

  render() {
    const rates = this.state.currencyExchange.rates;
    let arrayRates = [];

    for (let rate in rates) {
      arrayRates.push( 
        <option 
          value={`${rate}`} 
          key={`${rate}`} > {rate} </option> );
    }
    return (
      <div className="App">
        <BaseCurrencySelector
          rates={arrayRates}
          selectHandler={this.selectBaseHandler} />

        <ToCurrencySelector
          rates={arrayRates}
          selectHandler={this.selectToHandler} />

        {
          this.state.showInput ?
          <Inputs
            baseValue={this.state.currencyExchange.baseValue}
            currencyValue={this.state.currencyExchange.currencyValue} /> : null
        }
        
        <button onClick={this.findRate}>Find Currency</button>
      </div>
    );
  }
}

export default App;