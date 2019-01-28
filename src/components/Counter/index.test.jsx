import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './index';
configure({ adapter: new Adapter() });

describe('Counter', () => {
  let component = null;

  const mockData = {
    counter: {
      increment: () => {},
      decrement: () => {}
    }
  }

  it('renders correctly', () => {
    component = shallow(<Counter { ...mockData } />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('increases correctly', () => {
    component.instance().onIncrease();
    expect(component.state().value).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('decreases correctly', () => {
    component.instance().onDecrease();
    expect(component.state().value).toBe(0);
    expect(component).toMatchSnapshot();
  });
});