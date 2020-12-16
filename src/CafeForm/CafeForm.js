import React, { Component } from 'react';
import './CafeForm.css'

class CafeForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: ''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htlmfor='name'></label>
        <input 
          name='name' 
          placeholder='Name' 
          value={ this.state.name } 
          onChange={ this.handleChange }
        />

        <label htlmfor='date'></label>
        <input 
          name='date' 
          placeholder='Date (mm/dd)' 
          value={ this.state.date } 
          onChange={ this.handleChange }
        />

        <label htlmfor='time'></label>
        <input 
          name='time' 
          placeholder='Time' 
          value={ this.state.time } 
          onChange={ this.handleChange }
        />

        <label htlmfor='numberOfGuests'></label>
        <input 
          name='numberOfGuests' 
          placeholder='Number of guests' 
          value={ this.state.numberOfGuests } 
          onChange={ this.handleChange }
        />

        <button>Make Reservation</button>
      </form>

    )
  }
}

export default CafeForm;