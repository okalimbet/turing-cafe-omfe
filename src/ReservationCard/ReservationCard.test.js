import React from 'react';
import { screen, render } from '@testing-library/react';
import ReservationCard from './ReservationCard.js';
import '@testing-library/jest-dom';

describe('ReservationCard', () => {
  it('ReservationCard should render correctly', () => {
    render(
        <ReservationCard
          name={"Carl"}
          date={'4/6'}
          time={'8:00'}
          number={'4'}
          id={'0000'}
          key={'0000'}
        />
    );
  
    expect(screen.getByText('Carl')).toBeInTheDocument();
    expect(screen.getByText('4/6')).toBeInTheDocument();
    expect(screen.getByText('8:00')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 4')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  })
})