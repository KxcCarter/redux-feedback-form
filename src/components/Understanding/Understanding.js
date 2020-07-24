import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Understanding extends Component {
  state = {
    understand: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SET_UNDERSTAND',
      payload: this.state.understand,
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      understand: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>Understanding</h3>
        <h4>How well do you understand today's concepts? (between 0 and 5):</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="1">1</label>
          <input
            type="radio"
            id="1"
            name="understand"
            required
            value="1"
            onChange={this.handleInputChange}
          />
          <label htmlFor="2">2</label>
          <input
            type="radio"
            id="2"
            name="understand"
            required
            value="2"
            onChange={this.handleInputChange}
          />
          <label htmlFor="3">3</label>
          <input
            type="radio"
            id="3"
            name="understand"
            required
            value="3"
            onChange={this.handleInputChange}
          />
          <label htmlFor="4">4</label>
          <input
            type="radio"
            id="4"
            name="understand"
            required
            value="4"
            onChange={this.handleInputChange}
          />
          <label htmlFor="5">5</label>
          <input
            type="radio"
            id="5"
            name="understand"
            required
            value="5"
            onChange={this.handleInputChange}
          />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Understanding);
