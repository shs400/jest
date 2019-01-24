import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() });

describe('App', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

/*
  describe 와 it 에서 첫번째 파라미터는 작업의 설명을 넣어주게 되는데,
  describe 에서는 어떤 기능을 확인하는지, 그리고 it 부분에선 무엇을 검사해야 되는지에 대한 설명을 넣으시면 됩니다.
*/