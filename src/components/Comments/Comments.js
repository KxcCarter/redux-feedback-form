import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Comments extends Component {
  state = {
    comments: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SET_COMMENT',
      payload: this.state.comments,
    });
    this.setState({
      comments: '',
    });
    this.props.history.push('/review');
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      comments: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h4>Comments</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comments">Do you have any comments?</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            cols="30"
            value={this.state.comments}
            onChange={this.handleInputChange}
          ></textarea>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
