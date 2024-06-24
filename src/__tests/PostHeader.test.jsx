import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostHeader from '../Components/FeedPosts/PostHeader';

describe('PostHeader component renders without crashing', () => {
  test('Postheader to render', () => {
    render(<PostHeader />);
    const postHeaderEl = screen.getByTestId('data-postheader');
    expect(postHeaderEl).toBeInTheDocument();
  });
  test('PostHeader Avatar renders', () => {
    render(<PostHeader />);
    const avatarSvg = screen.getByRole('img', { name: '" avatar"' });
    expect(avatarSvg).toBeInTheDocument();
  });
});
