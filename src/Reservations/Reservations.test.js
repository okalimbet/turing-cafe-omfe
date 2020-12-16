import React from 'react';
import { screen, render } from '@testing-library/react';
import Reservations from './Reservations.js';
import '@testing-library/jest-dom';

describe('Reservations', () => {
  it('Reservations should render correctly', () => {
    const reservationSampleData = [
      {
      "id": 1,
      "name": "Christie",
      "date": "12/29",
      "time": "7:00",
      "number": 12
      },
      {
      "id": 2,
      "name": "Leta",
      "date": "4/5",
      "time": "8:00",
      "number": 2
      }
    ]

    render(
        <Reservations reservations={ reservationSampleData }/>
    );

    expect(screen.getByText('Christie')).toBeInTheDocument();
    expect(screen.getByText('12/29')).toBeInTheDocument();
    expect(screen.getByText('8:00')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 12')).toBeInTheDocument();
    expect(screen.getByTestId('cancel-1')).toBeInTheDocument();
  })
})