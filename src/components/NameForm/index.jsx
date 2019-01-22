import React, { Component } from 'react';

class NameForm extends Component {
  static defaultProps = {
    onSubmit: () => console.warn('onSubmit not defined'),
  }
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { onInsert } = this.props;
    // 이름을 추가하고, name 값 초기화
    if (!name) return false;

    onInsert(name);
    this.setState({
      name: ''
    });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>이름</label>
        <input type="text" value={name} onChange={this.onChange} />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default NameForm;