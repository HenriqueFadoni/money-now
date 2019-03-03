import React, { Component } from 'react';
import axios from 'axios';

import BaseCurrencySelector from './components/BaseCurrencySelector';
import ToCurrencySelector from './components/ToCurrencySelector';
import Inputs from './components/Inputs';

class App extends Component {
  state = {
    currencyExchange: {
      base: '',
      toCurrency: '',
      baseValue: 0,
      currencyValue: 0,
      date: '',
      rates: {}
    },
    showInput: false
  }

  async componentDidMount() {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.currencyExchange.base}`); // ANOTHER
    let update = {...this.state.currencyExchange};
    update.rates = data.rates;
    this.setState({ currencyExchange: update }); // ANOTHER 2
  };

  selectBaseHandler = event => this.getData(event.target.value);

  getData = async (currency) => {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`); // ANOTHER
    let update = {...this.state.currencyExchange};
    update.base = data.base;
    update.date = data.date;
    update.rates = data.rates;
    this.setState({ currencyExchange: update }); // ANOTHER 2
  }

  selectToHandler = event => {
    let update = {...this.state.currencyExchange};
    update.toCurrency = event.target.value;
    this.setState({ currencyExchange: update }); // ANOTHER 2
  };

  findRate = () => {
    const value = Math.round(this.state.currencyExchange.rates[this.state.currencyExchange.toCurrency] * 100) / 100;
    let update = {...this.state.currencyExchange};
    update.baseValue = 1;
    update.currencyValue = value;
    this.setState({
      currencyExchange: update, 
      showInput: true
    });
  }

  render() {
    const rates = this.state.currencyExchange.rates;
    let arrayRates = [];

    for (let rate in rates) {
      arrayRates.push(
        <option value={`${rate}`} key={`${rate}`} >
          {rate}
        </option>
      );
    }

    return (
      <div className="App">
        <BaseCurrencySelector 
          rates={arrayRates}
          selectHandler={this.selectBaseHandler}/>

        <ToCurrencySelector
          rates={arrayRates}
          selectHandler={this.selectToHandler}/>

        {
          this.state.showInput ? 
            <Inputs 
            baseValue={this.state.currencyExchange.baseValue}
            currencyValue={this.state.currencyExchange.currencyValue}/> : null
        }

        {/* Button Block if Base and Currency not selected */}
        <button onClick={this.findRate}>Find Currency</button>
      </div>
    );
  }
}

export default App;
