import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

//--- CSS ---

//--- Components ---

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class Review extends Component {
  state = {
    feeling: this.props.store.feelingReducer,
    understanding: this.props.store.understandingReducer,
    support: this.props.store.supportReducer,
    comments: this.props.store.commentReducer,
  };

  onClickSubmit = () => {
    console.log(this.state);
    axios
      .post('/feedback', this.state)
      .then((response) => {
        // should GET, but what is there to get?
        this.props.history.push('/1');
      })
      .catch((err) => {
        console.log('POST error!', err);
      });
  };

  render() {
    let review = [];
    for (const [key, value] of Object.entries(this.state)) {
      review.push(`${key.capitalize()}: ${value}`);
    }

    const reviewList = review.map((item, index) => {
      return <h2 key={index}>{item}</h2>;
    });

    return (
      <div>
        <h4>Review</h4>
        {reviewList}
        <button onClick={this.onClickSubmit}>Submit!</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Review);
