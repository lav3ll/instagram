import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthForm from '../Components/AuthForm/AuthForm';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('AuthForm Component renders without crashing', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <AuthForm />
      </Router>
    );

    // Verify if the form and its elements are in the document
    expect(screen.getByTestId('auth-form')).toBeInTheDocument();
    expect(screen.getByTestId('auth-form-email')).toBeInTheDocument();
    expect(screen.getByTestId('auth-form-password')).toBeInTheDocument();
    expect(screen.getByTestId('auth-form-btn')).toBeInTheDocument();
  });

  test('Alerts when either email or password is missing', () => {
    // Mock the window.alert function
    window.alert = jest.fn();

    render(
      <Router>
        <AuthForm />
      </Router>
    );

    // Clear the email input field
    const emailInput = screen.getByTestId('auth-form-email');
    fireEvent.change(emailInput, { target: { value: '' } });

    // Simulate user leaving the email field empty and only providing password
    const passwordInput = screen.getByTestId('auth-form-password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Click the login button
    const loginButton = screen.getByTestId('auth-form-btn');
    fireEvent.click(loginButton);

    // Check if the alert function was called
    expect(window.alert).toHaveBeenCalledWith(
      'You have not filled out all of the fields!'
    );
  });

  test('Logs the user in when correct information is entered', () => {
    const { getByTestId } = render(
      <Router>
        <AuthForm />
      </Router>
    );

    const emailInput = getByTestId('auth-form-email');
    const passwordInput = getByTestId('auth-form-password');

    fireEvent.change(emailInput, { target: { value: 'john@1234.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Click the login button
    const submitButton = getByTestId('auth-form-btn');
    fireEvent.click(submitButton);

    // Assert that the navigate function is called with the correct route
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
