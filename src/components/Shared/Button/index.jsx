import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    type: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    label: '',
    type: '',
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    const { label, type, onClick, ...props } = this.props;
    return (
      <Fragment>
        <button
          type={type}
          { ...props }
          onClick={onClick}>
          { label }
        </button>
      </Fragment>
    )
  }
}

export default Button;
