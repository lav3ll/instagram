import React from 'react';
import ProfilePage from '../Components/ProfilePage/ProfilePage';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ProfilePage component', () => {
  test('renders ProfileHeader component', () => {
    render(<ProfilePage />);
    const profileHeaderEl = screen.getByTestId('test-profileheader');
    expect(profileHeaderEl).toBeInTheDocument();
  });
  test('renders ProfileTabs component', () => {
    render(<ProfilePage />);
    const profileTabsEl = screen.getByTestId('test-profiletabs');
    expect(profileTabsEl).toBeInTheDocument();
  });
});
