import React from 'react'
import './ReservationCard.css'

const ReservationCard = (props) => {
    return (
      <section className='reservationCard'>
        <h3 className="card-name">{ props.name }</h3>
        <p className="card-details">{ props.date }</p>
        <p className="card-details">{ props.time }</p>
        <p className="card-details">Number of guests: { props.number }</p>
        <button data-testid={`cancel-${props.id}`}className="cancel-button">Cancel</button>
      </section>
    )
}

export default ReservationCard;