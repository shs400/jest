import React, { Component } from 'react';
import Counter from './components/Counter';
import NameForm from './components/NameForm';
import NameList from './components/NameList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['로이', '심현수']
    }
  }

  onInsert = (name) => {
    this.setState(({names}) => ({ names: names.concat(name) }));
  };

  render() {
    const { names } = this.state;
    const { onInsert } = this;

    return (
      <div>
        <Counter />
        <hr />
        <h1>이름 목록</h1>
        <NameForm onInsert={onInsert}/>
        <NameList names={names}/>
      </div>
    );
  }
}

export default App;
