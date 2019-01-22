import React from 'react';
import renderer from 'react-test-renderer';
import NameList from './index';

describe('NameList', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<NameList names={["로이", "심현수"]} />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});