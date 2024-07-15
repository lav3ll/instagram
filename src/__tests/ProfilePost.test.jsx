import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfilePost from '../Components/Profile/ProfilePost';

describe('Renders Profile Post component without crashing', () => {
  test('renders ProfilePost component with image', () => {
    const imgSrc = '/test-img.png';
    render(<ProfilePost img={imgSrc} />);

    const profilePostImage = screen.getByAltText('profile post');
    expect(profilePostImage).toBeInTheDocument();
    expect(profilePostImage).toHaveAttribute('src', imgSrc);
  });

  test('modal opens when GridItem is clicked', async () => {
    render(<ProfilePost img='/test-img.png' />);

    const modalContent = screen.queryByText('Modal Body Content'); // Replace with actual modal content text
    expect(modalContent).not.toBeInTheDocument();

    const gridItem = screen.getByAltText('profile post').parentElement; // Assuming the GridItem contains the profile post image
    fireEvent.click(gridItem);

    await screen.findByText('Modal Body Content'); // Replace with actual modal content text

    expect(screen.getByText('Modal Body Content')).toBeInTheDocument();
  });

  //   test('modal closes when ModalCloseButton is clicked', async () => {
  //     render(<ProfilePost img='/test-img.png' />);

  //     const gridItem = screen.getByAltText('profile post').parentElement; // Assuming the GridItem contains the profile post image
  //     fireEvent.click(gridItem);

  //     await screen.findByText('Modal Body Content'); // Replace with actual modal content text

  //     const modalCloseButton = screen.getByRole('button', { name: 'Close' });
  //     fireEvent.click(modalCloseButton);

  //     const modalContent = screen.queryByText('Modal Body Content'); // Replace with actual modal content text
  //     expect(modalContent).not.toBeInTheDocument();
  //   });
});
