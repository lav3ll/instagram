import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostFooter from '../Components/FeedPosts/PostFooter';

describe('PostHeader component renders without crashing', () => {
  test('PostHeader to render', () => {
    render(<PostFooter />);
    const postFooterEl = screen.getByTestId('data-postfooter');
    expect(postFooterEl).toBeInTheDocument();
  });
  //   test('PostHeader Avatar renders', () => {
  //     render(<PostHeader />);
  //     const avatarSvg = screen.getByRole('img', { name: '" avatar"' });
  //     expect(avatarSvg).toBeInTheDocument();
  //   });
});
