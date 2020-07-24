import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

//--- CSS ---

//--- Components ---

class Support extends Component {
  render() {
    return (
      <div>
        <h4>Support</h4>
      </div>
    );
  }
}

export default connect()(Support);
