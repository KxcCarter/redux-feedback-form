import React, { Component } from 'react';
import { connect } from 'react-redux';

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
