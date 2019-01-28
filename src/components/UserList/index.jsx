import React, { Component } from 'react';
import UserList from "./item";
import PropTypes from 'prop-types';

class NameList extends Component {
  static propTypes = {
    users: PropTypes.object,
  }

  static defaultProps = {
    users: {},
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.users !== this.props.users;
  }

  renderList() {
    const { users } = this.props;
    return users.map((user) => <UserList key={`${user.get('id')}_key`} user={user} />);
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default NameList;
