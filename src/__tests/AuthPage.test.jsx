import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthPage from '../Components/AuthPage'; // Adjusted the import to match the correct component name

// Mock the AuthForm component to simplify tests
jest.mock('../Components/AuthForm/AuthForm', () => () => (
  <div data-testid='auth-form'>AuthForm</div>
));

describe('AuthPage Component', () => {
  test('renders without crashing', () => {
    render(<AuthPage />);
  });

  test('renders AuthForm component', () => {
    render(<AuthPage />);
    const authForm = screen.getByTestId('auth-form');
    expect(authForm).toBeInTheDocument();
  });

  test('renders images with correct alt text', () => {
    render(<AuthPage />);
    const authImage = screen.getByAltText('Phone image');
    const playstoreImage = screen.getByAltText('playstore logo');
    const microsoftImage = screen.getByAltText('microsoft logo'); // Corrected the alt text for the Microsoft image
    expect(authImage).toBeInTheDocument();
    expect(playstoreImage).toBeInTheDocument();
    expect(microsoftImage).toBeInTheDocument();
  });

  test('renders "Get the app." text', () => {
    render(<AuthPage />);
    const getText = screen.getByText('Get the app.');
    expect(getText).toBeInTheDocument();
  });

  test('conditionally renders Box based on screen size', () => {
    render(<AuthPage />);
    const boxElement = screen.getByTestId('responsive-box'); // Make sure the Box component has data-testid='responsive-box'
    expect(boxElement).toHaveStyle('display: none'); // This will check for base size (mobile view)
    // Optionally, use a window resize mock library to test for larger screen sizes if necessary
  });
});
