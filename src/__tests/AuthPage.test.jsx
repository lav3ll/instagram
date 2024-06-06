import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthPage from '../Components/AuthPage';

// Mock the AuthForm component
jest.mock('../Components/AuthForm/AuthForm', () => () => (
  <div data-testid='auth-form'>AuthForm</div>
));

describe('AuthPage Component', () => {
  //   test('renders without crashing', () => {
  //     render(<AuthPage />);
  //   });

  test('renders AuthForm component', () => {
    render(<AuthPage />);
    const authForm = screen.getByTestId('auth-form');
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

  //   test('renders "Get the app." text', () => {
  //     render(<AuthPage />);
  //     const getText = screen.getByText('Get the app.');
  //     expect(getText).toBeInTheDocument();
  //   });

  test('conditionally renders Box based on screen size', () => {
    render(<AuthPage />);
    const boxElement = screen.getByAltText('Phone image');
    expect(boxElement).toHaveStyle('display: none');
  });
});
