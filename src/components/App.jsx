import React, { Component } from 'react';
import Counter from './Counter/index';
import NameForm from './NameForm/index';
import NameList from './NameList/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['로이', '심현수'],
    };
  }

  onInsert = (name) => {
    this.setState(({ names }) => ({ names: names.concat(name) }));
  };

  render() {
    const { names } = this.state;

    return (
      <div>
        <Counter />
        <hr />
        <h1>이름 목록</h1>
        <NameForm onInsert={this.onInsert} />
        <NameList names={names} />
      </div>
    );
  }
}

export default App;
