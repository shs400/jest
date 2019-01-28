import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  static defaultProps = {
    user: {},
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }

  render() {
    const { user } = this.props;
    const { name, id } = user.toJS();
    return (
      <div>
        <li className={`list_${id}`} key={id}>{name}</li>
      </div>
    )
  }
}

export default UserList;
