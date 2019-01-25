import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './index';
configure({ adapter: new Adapter() });

describe('Button', () => {
  let component = null;
  let mockProps = {
    type: 'button',
    onClick: () => {},
    className: 'increase'
  };

  it('render correctly', () => {
    component = mount(<Button />);
  });

  it('snapshot matcher', () => {
    expect(component).toMatchSnapshot();
  });

  describe('button label text', () => {
    it('has a button', () => {
      expect(component.find('button').exists()).toBe(true);
    });

    it('increase decrease label', () => {
      const labelCheck = typeof component.props().label;
      const typeCheck = typeof component.props().type;
      const onClickCheck = typeof component.props().onClick;
      expect(labelCheck).toBe('string');
      expect(typeCheck).toBe('string');
      expect(onClickCheck).toBe('function');
    });
  });
});