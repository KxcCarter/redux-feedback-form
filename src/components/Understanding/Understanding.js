import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Understanding extends Component {
  // sets default to 5
  state = {
    understand: 5,
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
        <h4>Understanding</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="understand">
            How well do you understand today's concepts? (between 0 and 5):
          </label>
          <input
            type="range"
            id="understand"
            name="understand"
            min="0"
            max="5"
            value={this.state.understand}
            onChange={this.handleInputChange}
          />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Understanding);
