import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './item';
configure({ adapter: new Adapter() });

describe('item', () => {
  let component = null;

  const users = {
    id: 1,
    name: '로이'
  };

  it('render correctly', () => {
    component = shallow(<UserList key={users.id} user={ users } />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('list text', () => {
    it('has a li', () => {
      expect(component.exists()).toBe(true);
    });
  })
});