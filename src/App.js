import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    base: '',
    toCurrency: '',
    baseValue: 0,
    currencyValue: 0,
    date: '',
    rates: {}
  }

  async componentDidMount() {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`);
    this.setState({ rates: data.rates });
  };

  selectBaseHandler = event => this.getData(event.target.value);

  getData = async (currency) => {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`);
    this.setState({
      base: data.base,
      date: data.date,
      rates: data.rates
    });
  }

  selectToHandler = event => this.setState({ toCurrency: event.target.value });

  findRate = () => {
    const value = Math.round(this.state.rates[this.state.toCurrency] * 100) / 100;
    this.setState({ 
      baseValue: 1,
      currencyValue: value
    });
  }

  render() {
    const rates = this.state.rates;
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
        <select id="base-currency-selector" onChange={event => this.selectBaseHandler(event)} required>
          <option value="" defaultValue>Please Select a Base Currency</option>
          {arrayRates}
        </select>

        <select id="to-currency-selector" onChange={event => this.selectToHandler(event)} required>
          <option value="" defaultValue>Please Select a Currency to Convert</option>
          {arrayRates}
        </select>

        {/* Make it invisible */}
        <div>
          <input type="number" placeholder={this.state.baseValue}></input>
          <input type="number" placeholder={this.state.currencyValue}></input>
        </div>

        {/* Button Block if Base and Currency not selected */}
        <button onClick={this.findRate}>Find Currency</button>
      </div>
    );
  }
}

export default App;
