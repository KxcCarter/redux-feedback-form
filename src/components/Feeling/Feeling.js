import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Feeling extends Component {
  // sets default to 5
  state = {
    feel: 5,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SET_FEELINGS',
      payload: this.state.feel,
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      feel: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h4>Feeling</h4>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="feel">
            How are you feeling about today's concepts? (between 0 and 5):
          </label>
          <input
            type="range"
            id="feel"
            name="feel"
            min="0"
            max="5"
            value={this.state.feel}
            onChange={this.handleInputChange}
          />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Feeling);
