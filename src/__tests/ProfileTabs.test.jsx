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
});
