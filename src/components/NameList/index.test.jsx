import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameList from './index';
configure({ adapter: new Adapter() });

describe('NameList', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<NameList names={["로이", "심현수"]} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('list text', () => {
    it('has a li', () => {
      expect(component.find('li').exists()).toBe(true);
    });

    it('has a ul', () => {
      expect(component.find('ul').exists()).toBe(true);
    });
  })
});