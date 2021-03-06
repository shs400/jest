import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameList from './index';
configure({ adapter: new Adapter() });

describe('NameList', () => {
  let component = null;

  const userMockData = [
    {
      id: 1,
      name: '로이'
    },
    {
      id: 2,
      name: '심현수'
    }
  ]

  it('renders correctly', () => {
    component = shallow(<NameList users={userMockData} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('list text', () => {
    it('has a ul', () => {
      expect(component.find('ul').exists()).toBe(true);
    });
  })
});