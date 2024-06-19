import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../Components/HomePage';

describe('Homepage component renders without crashing', () => {
  test('Homepage to render', () => {
    render(<HomePage />);
    const homepageEl = screen.getByTestId('data-homepage');
    expect(homepageEl).toBeInTheDocument();
  });
});
