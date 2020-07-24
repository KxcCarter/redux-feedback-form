import React, { Component } from 'react';
import { connect } from 'react-redux';

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
