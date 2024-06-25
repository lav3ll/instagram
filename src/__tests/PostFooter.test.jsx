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

  test('Comment logo to renders on the page', () => {
    render(<PostFooter />);
    const CommentLogo = screen.getByLabelText('Comment');
    expect(CommentLogo).toBeInTheDocument();
  });

  test('Like count updates when like icon is clicked', () => {
    render(<PostFooter />);
    const likeBtn = screen.getByTestId('data-likeClick');
    const likesText = screen.getByTestId('data-likesText');

    // Initial state: NotificationsLogo should be present
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();

    // Click to like: UnlikeLogo should be present, NotificationsLogo should not be present
    fireEvent.click(likeBtn);
    expect(likesText).toHaveTextContent('1001');
    expect(screen.getByLabelText('Unlike')).toBeInTheDocument();
    expect(screen.queryByLabelText('Notifications')).not.toBeInTheDocument();

    // Click again to unlike: NotificationsLogo should be present, UnlikeLogo should not be present
    fireEvent.click(likeBtn);
    expect(likesText).toHaveTextContent('1000'); // Assuming the initial count was 1000
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
    expect(screen.queryByLabelText('Unlike')).not.toBeInTheDocument();
  });
});
