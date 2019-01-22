import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<App />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/*
  describe 와 it 에서 첫번째 파라미터는 작업의 설명을 넣어주게 되는데,
  describe 에서는 어떤 기능을 확인하는지, 그리고 it 부분에선 무엇을 검사해야 되는지에 대한 설명을 넣으시면 됩니다.
*/