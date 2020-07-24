import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Comments extends Component {
  state = {
    comment: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SET_COMMENT',
      payload: this.state.comment,
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      comment: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h4>Comments</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">Do you have any comments?</label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            cols="30"
            value={this.state.comment}
            onChange={this.handleInputChange}
          ></textarea>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
