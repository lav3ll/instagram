import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Feedposts from '../Components/FeedPosts/Feedposts';

describe('FeedPosts component renders without crashing', () => {
  test('FeedPosts to render', () => {
    render(<Feedposts />);
    const feedpostsEl = screen.getByTestId('data-feedpost');
    expect(feedpostsEl).toBeInTheDocument();
  });
});
