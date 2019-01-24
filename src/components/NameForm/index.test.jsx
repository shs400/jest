import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameForm from './index';
configure({ adapter: new Adapter() });

describe('NameFrom', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<NameForm />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('insert new text', () => {
    it('has a form', () => {
      expect(component.find('form').exists()).toBe(true);
      // form이 있는지 확인
    });

    it('has an input', () => {
      expect(component.find('input').exists()).toBe(true);
      // input이 있는지 확인
    });

    it('simulates input change', () => {
      const mockEvent = {
        target: {
          value: 'hello'
        }
      }

      component.find('input').simulate('change', mockEvent);
      // 시뮬레이트 합니다. 두번째 파라미터는 이벤트 객체
      expect(component.state().name).toBe('hello');
    });

    it('simulates input submit', () => {
      const mockEvent = {
        preventDefault: () => null
      };
      component.find('form').simulate('submit', mockEvent);
      expect(component.state().name).toBe('');
    });

  });
});