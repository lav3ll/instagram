import React from 'react';
import ProfileTabs from '../Components/Profile/ProfileTabs';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Profiel tabs render without any crashes', () => {
  test('Profile tabs component renders ', () => {
    render(<ProfileTabs />);
    const profileTabsEl = screen.getByTestId('test-profiletabs');
    expect(profileTabsEl).toBeInTheDocument();
  });

  test('renders all icons', () => {
    render(<ProfileTabs />);
    const postsIcon = screen.getByTestId('test-logoGrid');
    const savedIcon = screen.getByTestId('test-logoBookmark');
    const likesIcon = screen.getByTestId('test-logoHeart');
    expect(postsIcon).toBeInTheDocument();
    expect(savedIcon).toBeInTheDocument();
    expect(likesIcon).toBeInTheDocument();
  });
});
