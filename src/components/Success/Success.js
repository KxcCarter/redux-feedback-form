import React, { Component } from 'react';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Success extends Component {
  handleClick = () => {
    this.props.history.push('/1');
  };

  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <h3>Feedback submitted!</h3>
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect()(Success);
