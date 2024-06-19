import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeedPost from '../Components/FeedPosts/FeedPosts';

describe('FeedPost component renders without crashing', () => {
  test('FeedPost to render', () => {
    render(<FeedPost />);
    const feedpostEls = screen.getAllByTestId('data-feedpost');
    const feedpostImages = screen.getAllByRole('img', {
      name: 'user profile pic',
    });
    expect(feedpostEls.length).toBeGreaterThan(0);
    feedpostEls.forEach((postEl) => {
      expect(postEl).toBeInTheDocument();
    });
    expect(feedpostImages.length).toBeGreaterThan(0);
    feedpostEls.forEach((feedpostImage) => {
      expect(feedpostImage).toBeInTheDocument();
    });
  });
});
