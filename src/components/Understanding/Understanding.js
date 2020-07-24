import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//--- CSS ---

//--- Components ---

class Understanding extends Component {
  render() {
    return (
      <div>
        <h4>Understanding</h4>
      </div>
    );
  }
}

export default connect()(Understanding);
