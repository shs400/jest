import React, { Component } from 'react';
// import Counter from './Counter/index';
import Counter from '../containers/Counter'
import NameForm from './NameForm/index';
import NameList from './UserList/index';
import { Record, Map, List } from 'immutable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data({
        input: '',
        users: List([
          User({
            id: 1,
            name: '로이'
          }),
          User({
            id: 2,
            name: '심현수'
          })
        ])
      })
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;

    this.setState({
      data: data.set('input', value)
    });
  };

  onInsert = (name) => {
    const { data } = this.state;
    const addUser = {
      id: ++ data.toJS().users.length,
      name
    };

    this.setState({
      data: data.update('users', users => users.push(Map(addUser)))
    });
  };

  render() {
    const { data } = this.state;
    const users = data.users;
    return (
      <div>
        <Counter />
        <hr />
        <h1>이름 목록</h1>
        <NameForm
          onChange={this.onChange}
          onInsert={this.onInsert}
        />
        <NameList users={users} />
      </div>
    );
  }
}

const User = Record({
  id: null,
  name: null,
});

const Data = Record({
  users: List()
});

export default App;
