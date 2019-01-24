import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameList extends Component {
  static propTypes = {
    names: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    names: [],
  }

  renderList() {
    const { names } = this.props;
    const nameList = names.map(
      (name, index) => (<li className={`list_${index}`} key={`${name}_${index.toString()}`}>{name}</li>),
    );
    return nameList;
  }

  render() {
    return (
      <ul>
        { this.renderList() }
      </ul>
    );
  }
}

export default NameList;
