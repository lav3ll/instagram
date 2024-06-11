import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthForm from '../Components/AuthForm/AuthForm';

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
});
