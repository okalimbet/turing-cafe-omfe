import React from 'react';
import {fireEvent, screen, render } from '@testing-library/react';
import CafeForm from './CafeForm.js';
import '@testing-library/jest-dom';

describe('CafeForm', () => {
  it('CafeForm should render correctly', () => {
    render(
        <CafeForm makeReservation={ jest.fn() }/>
    );

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Make Reservation')).toBeInTheDocument();
  })

  it('CafeForm track input changes and a a new reservation', () => {
    const mockMakeReservation = jest.fn()
    render(
        <CafeForm makeReservation={ mockMakeReservation }/>
    );

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');
    const makeReservationButton = screen.getByText('Make Reservation');

    Date.now = jest.fn().mockImplementation(() => 1000)

    fireEvent.change(nameInput, { target: {value: 'Olga'} });
    fireEvent.change(dateInput, { target: {value: '10/17'} });
    fireEvent.change(timeInput, { target: {value: '12:00'} });
    fireEvent.change(numberInput, { target: {value: '100'} });
    fireEvent.click(makeReservationButton);

    const expectedReservation = {
      id: Date.now(),
      name: 'Olga',
      date: '10/17',
      time: '12:00',
      number: '100'
    }

    expect(mockMakeReservation).toHaveBeenCalledWith(expectedReservation);

  })
})