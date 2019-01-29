import React, { Component } from 'react';
// import Counter from './Counter/index';
import Counter from '../containers/Counter'
import NameForm from './NameForm/index';
import UserList from './UserList/index';
import { produce } from 'immer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        input: '',
        users: [
          {
            id: 1,
            name: '로이'
          },
          {
            id: 2,
            name: '심현수'
          }
        ]
      }
    };
  }

  onChange = (e) => {
    const { value } = e.target;

    this.setState(
      produce(draft => {
        data: draft.set('input', value)
      })
    )
  };

  onInsert = (name, id) => {
    const addUser = {
      id,
      name
    };

    this.setState(
      produce(draft => {
        draft.data.users.push(addUser)
      })
    )
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
          idCount={users.length}
        />
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
