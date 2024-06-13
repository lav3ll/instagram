import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Components/Sidebar/Sidebar';
import '@testing-library/jest-dom';

describe('Sidebar Component', () => {
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
});
