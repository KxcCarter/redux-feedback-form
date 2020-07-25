import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Support extends Component {
  state = {
    support: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: this.state.support,
    });
    this.setState({
      support: '',
    });
    this.props.history.push('/4');
  };

  handleInputChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h4>Support</h4>
        <h4>How supported do you feel today? (between 0 and 5):</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="1">1</label>
          <input
            type="radio"
            id="1"
            name="support"
            required
            value="1"
            onChange={this.handleInputChange}
          />
          <label htmlFor="2">2</label>
          <input
            type="radio"
            id="2"
            name="support"
            required
            value="2"
            onChange={this.handleInputChange}
          />
          <label htmlFor="3">3</label>
          <input
            type="radio"
            id="3"
            name="support"
            required
            value="3"
            onChange={this.handleInputChange}
          />
          <label htmlFor="4">4</label>
          <input
            type="radio"
            id="4"
            name="support"
            required
            value="4"
            onChange={this.handleInputChange}
          />
          <label htmlFor="5">5</label>
          <input
            type="radio"
            id="5"
            name="support"
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

export default connect()(Support);
