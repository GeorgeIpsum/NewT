import React from 'react';
import { render } from '@testing-library/react';
import Clock from './clock';

describe("Clock", () => {
  it('renders and unmounts without crashing', () => {
    const { unmount } = render(<Clock />);
    unmount(); 
  });
});

