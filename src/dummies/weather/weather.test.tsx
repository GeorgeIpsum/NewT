import React from 'react';
import { render } from '@testing-library/react';
import Weather from './weather';

describe("Weather", () => {
  it('renders and unmounts without crashing', () => {
    const { unmount } = render(<Weather />);
    unmount(); 
  });
});

