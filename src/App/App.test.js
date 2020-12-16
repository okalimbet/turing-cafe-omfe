import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event'
import App from './App';
import { getAllReservations } from '../apiCalls.js';
jest.mock('../apiCalls.js')

describe('App', () => {

  beforeEach(() => {
    getAllReservations.mockResolvedValueOnce([
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
      "time": "7:00",
      "number": 2
      }]
    );
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders all components on load', async () => {
    render(<App />)

    await waitFor(() => { 
      expect(screen.getByTestId("cafe-form")).toBeInTheDocument(); 
      expect(screen.getByTestId('reservationcard-1')).toBeInTheDocument();
      expect(screen.getByTestId('reservationcard-2')).toBeInTheDocument();
      expect(screen.getByTestId('all-Reservations')).toBeInTheDocument();
    })
  })

  it('it adds a new reservation to a page', async () => {
    render(<App />)

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');

    userEvent.type(nameInput, "Unicorn");
    userEvent.type(dateInput, "12/12");
    userEvent.type(timeInput, "00:00");
    userEvent.type(numberInput, "100");

    const reservationButton = screen.getByText('Make Reservation');

    fireEvent.click(reservationButton);

    expect(screen.getByText('Unicorn')).toBeInTheDocument();
    expect(screen.getByText('12/12')).toBeInTheDocument();
    expect(screen.getByText('00:00')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 100')).toBeInTheDocument();
   })
})
