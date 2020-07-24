import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

//--- CSS ---

//--- Components ---

class Review extends Component {
  state = {
    feeling: this.props.store.feelingReducer,
    understanding: this.props.store.understandingReducer,
    support: this.props.store.supportReducer,
    comment: this.props.store.commentReducer,
  };

  render() {
    let stuff = Object.values(this.state);
    console.log(stuff);

    const review = stuff.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <div>
        <h4>Review</h4>
        <ul>{review}</ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Review);
