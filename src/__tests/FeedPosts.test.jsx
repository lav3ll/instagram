import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Feedposts from '../Components/FeedPosts/Feedposts';

describe('Homepage component renders without crashing', () => {
  test('Homepage to render', () => {
    render(<Feedposts />);
    const feedpostsEl = screen.getByTestId('data-feedposts');
    expect(feedpostsEl).toBeInTheDocument();
  });
});
