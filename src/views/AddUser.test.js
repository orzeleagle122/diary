import React from 'react';
import AddUser from 'views/AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';

describe('Add User', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Grzesiek' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grzesiek');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Grzesiek' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grzesiek');
    expect(newUser).not.toBeInTheDocument();
  });
});
