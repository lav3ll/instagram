import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuggestedUser from '../Components/SuggestedUsers/SuggestedUser';

describe('Suggested Users render correctly without crashing or any errors', () => {
  test('Suggest user renders without crashing', () => {
    render(<SuggestedUser />);
    const suggestedUserEl = screen.getByTestId('test-suggestedUser');
    expect(suggestedUserEl).toBeInTheDocument();
  });

  test('Follow / Unfollow button changes text when clicked', () => {
    render(<SuggestedUser />);

    const suggestedBtnEl = screen.getByRole('button');
    const followUnfollowBtn = screen.getByTestId('suggestedUser-btn');
    expect(suggestedBtnEl).toHaveTextContent('Follow');
    fireEvent.click(followUnfollowBtn);
    expect(suggestedBtnEl).toHaveTextContent('Unfollow');
  });
});
