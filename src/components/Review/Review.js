import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

//--- CSS ---

//--- Components ---

class Review extends Component {
  render() {
    return (
      <div>
        <h4>Review</h4>
      </div>
    );
  }
}
// Will need to map store to props
export default connect()(Review);
