import React, { Component } from 'react';
import ItemList from "./item";
import PropTypes from 'prop-types';

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array,
  }

  static defaultProps = {
    users: [],
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.users !== this.props.users;
  }

  renderList() {
    const { users } = this.props;
    return users.map((user) => <ItemList key={`${user.id}_key`} user={user} />);
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default UserList;
