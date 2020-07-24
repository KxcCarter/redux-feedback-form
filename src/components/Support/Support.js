import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Support extends Component {
  // sets default to 5
  state = {
    support: 5,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: this.state.support,
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      support: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h4>Support</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="support">
            How well do you supported today? (between 0 and 5):
          </label>
          <input
            type="range"
            id="support"
            name="support"
            min="0"
            max="5"
            value={this.state.support}
            onChange={this.handleInputChange}
          />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Support);
