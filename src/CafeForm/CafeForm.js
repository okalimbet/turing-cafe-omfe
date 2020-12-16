import React, { Component } from 'react';
import './CafeForm.css'

class CafeForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newReservation = { 
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
      id: Date.now()
    }
    this.props.makeReservation( newReservation )
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '', 
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form data-testid='cafe-form' onSubmit={this.handleSubmit}>
        <label htlmfor='name'></label>
        <input 
          className="input-style"
          type='text'
          name='name' 
          placeholder='Name' 
          value={ this.state.name } 
          onChange={ this.handleChange }
        />

        <label htlmfor='date'></label>
        <input 
          className="input-style"
          type='text'
          name='date' 
          placeholder='Date (mm/dd)' 
          value={ this.state.date } 
          onChange={ this.handleChange }
        />

        <label htlmfor='time'></label>
        <input 
          className="input-style"
          type='text'
          name='time' 
          placeholder='Time' 
          value={ this.state.time } 
          onChange={ this.handleChange }
        />

        <label htlmfor='number'></label>
        <input 
          className="input-style"
          type='text'
          name='number' 
          placeholder='Number of guests' 
          value={ this.state.number } 
          onChange={ this.handleChange }
        />

        <button className="cancel-button">Make Reservation</button>
      </form>

    )
  }
}

export default CafeForm;