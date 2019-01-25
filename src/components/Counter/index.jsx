import React, { Component } from 'react';
import { Button } from '../Shared';
import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.object,
  }

  static defaultProps = {
    counter: {},
  }
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onIncrease = () => {
    this.props.counter.increment();
    this.setState(({ value }) => ({ value: value + 1 }));
  };

  onDecrease = () => {
    this.props.counter.decrement();
    this.setState(({ value }) => ({ value: value <= 0 ? value : value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>카운터</h1>
        <h2>{value}</h2>
        <div>
          <Button
            type="button"
            className="increase"
            onClick={this.onIncrease}
            label="+"
          />
          <Button
            type="button"
            className="decrease"
            onClick={this.onDecrease}
            label="-"
          />
        </div>
      </div>
    );
  }
}

export default Counter;
