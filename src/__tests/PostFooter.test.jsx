import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostFooter from '../Components/FeedPosts/PostFooter';

describe('PostHeader component renders without crashing', () => {
  test('PostHeader to render', () => {
    render(<PostFooter />);
    const postFooterEl = screen.getByTestId('data-postfooter');
    expect(postFooterEl).toBeInTheDocument();
  });

  test('Like count updates when like icon is clicked', () => {
    render(<PostFooter />);
    const likeBtn = screen.getByTestId('data-likeClick');
    const likesText = screen.getByTestId('data-likesText');
    fireEvent.click(likeBtn);
    expect(likesText).toHaveTextContent('1001');
  });

  test('Like count updates when like icon is clicked for a second time and the like is removed', () => {
    render(<PostFooter />);
    const likeBtn = screen.getByTestId('data-likeClick');
    const likesText = screen.getByTestId('data-likesText');
    fireEvent.click(likeBtn);
    fireEvent.click(likeBtn);
    expect(likesText).toHaveTextContent('1000');
  });
});
