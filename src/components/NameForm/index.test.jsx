import React from 'react';
import renderer from 'react-test-renderer';
import NameForm from './index';

describe('NameFrom', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<NameForm />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});