import React from 'react';
import { render, cleanup } from '../../test-utils';
import preloadAll from 'jest-next-dynamic';
import Index from '../index';

beforeAll(async () => {
  await preloadAll();
});
afterEach(cleanup);

describe('INDEX PAGE', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Index />);
    expect(getByTestId('title')).toHaveTextContent(/Boilerplate Next MUI/);
  });
});
