import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard.js'
import './Reservations.css'

const Reservations = (props) => {
  const ReservationsCards = props.reservations.map(reservation => {
      return (
          <ReservationCard 
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            id={reservation.id}
            key={reservation.id}
          />
      )
  })
  
  return (
      <section data-testid='all-Reservations' className='reservations-container'>   
        { ReservationsCards }
      </section>
  )
}

export default Reservations;