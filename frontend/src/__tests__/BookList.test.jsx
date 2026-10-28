import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookList from '../components/BookList';
test('renders fetched books in BookList component', async () => {
  const mockBooks = [
    { id: 1, title: 'React Testing', author: 'John Doe' },
  ];

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockBooks),
    })
  );

  render(<BookList />);

  const bookTitle = await waitFor(() => screen.getByText(/React Testing/i));
  expect(bookTitle).toBeInTheDocument();
});