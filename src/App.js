import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    base: '',
    toCurrency: '',
    date: '',
    rates: {}
  }

  async componentDidMount() {
    const {data} = await axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`);
    this.setState({
      base: data.base,
      date: data.date,
      rates: data.rates
    });
  }

  selectBaseHandler = event => this.setState({base: event.target.value});
  selectToHandler = event => this.setState({toCurrency: event.target.value});

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
        <select id="base-currency-selector" onChange={event => this.selectBaseHandler(event)}>
          <option value="" defaultValue>Please Select a Base Currency</option>
          {arrayRates}
        </select>

        <select id="to-currency-selector" onChange={event => this.selectToHandler(event)}>
          <option value="" defaultValue>Please Select a Currency to Convert</option>
          {arrayRates}
        </select>
      </div>
    );
  }
}

export default App;
