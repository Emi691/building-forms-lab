// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
    text: '',
    }
  }
  

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      text: '',
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add band</label>
            <input type= "text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type= "submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
