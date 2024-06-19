import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Components/Sidebar/Sidebar';
import '@testing-library/jest-dom';

describe('Sidebar Component', () => {
  const mockResize = (width) => {
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
  };

  beforeEach(() => {
    global.innerWidth = 1024; // Default large screen size
  });

  test('Renders Sidebar without crashing and contains expected content', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Check if the sidebar is rendered
    const sidebarElement = screen.getByTestId('sidebar-element');
    expect(sidebarElement).toBeInTheDocument();
  });

  test('Sidebar items are in the document', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Check to see if each sidebar item is rendered
    const homeItem = screen.getByText('Home');
    expect(homeItem).toBeInTheDocument();
    const searchItem = screen.getByText('Search');
    expect(searchItem).toBeInTheDocument();
    const notificationItem = screen.getByText('Notification');
    expect(notificationItem).toBeInTheDocument();
    const createItem = screen.getByText('Create');
    expect(createItem).toBeInTheDocument();
    const profileItem = screen.getByText('Profile');
    expect(profileItem).toBeInTheDocument();
  });

  // test('Check to see if instagram logo renders correctly on small screens', () => {
  //   mockResize(400);
  //   render(
  //     <Router>
  //       <Sidebar />
  //     </Router>
  //   );

  //   const instagramMobileLogo = screen.getByTestId('instagram-mobile-logo');
  //   const instagramLogo = screen.getByTestId('instagram-logo');

  //   expect(instagramMobileLogo).toBeInTheDocument();
  //   expect(instagramLogo).not.toBeInTheDocument();
  // });

  // test('Check to see if instagram logo renders correctly on large screens', () => {
  //   mockResize(1024); // Simulate a large screen
  //   render(
  //     <Router>
  //       <Sidebar />
  //     </Router>
  //   );

  //   const instagramLogo = screen.getByTestId('instagram-logo');
  //   const instagramMobileLogo = screen.getByTestId('instagram-mobile-logo');
  //   expect(instagramLogo).toBeInTheDocument();
  //   expect(instagramMobileLogo).not.toBeInTheDocument();
  });
});
