import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

//--- CSS ---

//--- Components ---

class Comments extends Component {
  render() {
    return (
      <div>
        <h4>Comments</h4>
      </div>
    );
  }
}

export default connect()(Comments);
