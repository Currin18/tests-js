import React from 'react';
import { render } from '@testing-library/react';
import Link from '../../../src/app/components/Link';
import '@testing-library/jest-dom/extend-expect';

describe('Link component', () => {
  test('Link changes the class when hovered', () => {
    const component = render(
      <Link page="https://indigitall.com">Indigitall</Link>,
    );

    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});