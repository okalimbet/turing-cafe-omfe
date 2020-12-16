import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apiCalls'
import Reservations from '../Reservations/Reservations.js'
import CafeForm from "../CafeForm/CafeForm.js"


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [], 
      error: ''
    }
  }

  componentDidMount() {
    getAllReservations()
    .then(reservations => this.setState({ reservations: reservations }))
    .catch(error => this.setState({error: error.message}))
  }

  makeReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations, reservation] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <CafeForm makeReservation={ this.makeReservation } />
        </div>
        <div className='resy-container'>
        <Reservations reservations={ this.state.reservations }/>
        </div>
      </div>
    )
  }
}

export default App;
