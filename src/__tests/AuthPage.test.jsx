import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthPage from '../Components/AuthPage';

jest.mock('../Components/AuthForm/AuthForm', () => () => (
  <div data-testid='auth-page'>AuthForm</div>
));

// Utility function to check if an element is visible
const isElementVisible = (element) => {
  if (!element) return false;
  const style = window.getComputedStyle(element);
  return style.display !== 'none';
};
describe('AuthPage Component', () => {
  test('renders without crashing', () => {
    render(<AuthPage />);
  });

  test('renders AuthForm component', () => {
    render(<AuthPage />);
    const authForm = screen.getByTestId('auth-page');
    expect(authForm).toBeInTheDocument();
  });

  test('renders images with correct alt text', () => {
    render(<AuthPage />);
    const authImage = screen.getByAltText('Phone image');
    const playstoreImage = screen.getByAltText('playstore logo');
    const microsoftImage = screen.getByAltText('microsoft logo');
    expect(authImage).toBeInTheDocument();
    expect(playstoreImage).toBeInTheDocument();
    expect(microsoftImage).toBeInTheDocument();
  });

  test('renders "Get the app." text', () => {
    render(<AuthPage />);
    const getText = screen.getByText('Get the app.');
    expect(getText).toBeInTheDocument();
  });

  // test('conditionally renders Box based on small screen size', () => {
  //   // Set window.innerWidth to simulate a small screen size
  //   global.innerWidth = 500;

  //   render(<AuthPage />);

  //   // Get the Box component
  //   const boxElement = screen.queryByAltText('Phone image').closest('div'); // Assuming Box is rendered as a div

  //   // Check if the Box is not rendered on small screens
  //   const computedStyle = window.getComputedStyle(boxElement);
  //   expect(computedStyle.getPropertyValue('display')).toBe('none');

  //   // Reset window.innerWidth to its original value
  //   global.innerWidth = window.innerWidth;
  // });
  test('conditionally renders Box based on large screen size', () => {
    // Simulate a large screen
    window.innerWidth = 800;
    window.dispatchEvent(new Event('resize'));

    render(<AuthPage />);
    let boxElement = screen.queryByAltText('Phone image');
    boxElement = screen.queryByAltText('Phone image');
    expect(boxElement).toBeInTheDocument();
  });
});
