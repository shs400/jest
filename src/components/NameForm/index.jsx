import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameForm extends Component {
  static propTypes = {
    onInsert: PropTypes.func,
    idCount: PropTypes.number
  }

  static defaultProps = {
    onInsert: () => {},
    idCount: -1,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onChange = (e) => {
    const { value } = e.target
    this.setState({
      name: value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { onInsert, idCount } = this.props;
    const id = idCount + 1;
    // 이름을 추가하고, name 값 초기화
    if (!name) return false;
    onInsert(name, id);
    return this.setState({
      name: '',
    });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="name">
          이름
          <input type="text" id="name" value={name} onChange={this.onChange} />
        </label>
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default NameForm;
