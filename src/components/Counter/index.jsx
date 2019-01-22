import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  onIncrease = () => {
    this.setState(({value}) => ({ value: value + 1 }));
  }

  onDecrease = () => {
    this.setState(({value}) => ({ value: value <= 0 ? value : value - 1 }));
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>카운터</h1>
        <h2>{value}</h2>
        <button onClick={this.onIncrease}>+</button>
        <button onClick={this.onDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;