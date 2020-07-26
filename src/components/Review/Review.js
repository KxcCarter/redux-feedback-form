import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//--- CSS ---

//--- Components ---

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const Review = () => {
  let history = useHistory();
  const store = useSelector((store) => store);

  const feedback = {
    feeling: store.feelingReducer,
    understanding: store.understandingReducer,
    support: store.supportReducer,
    comments: store.commentReducer,
  };

  const onClickSubmit = () => {
    axios
      .post('/feedback', feedback)
      .then((response) => {
        // should GET, but what is there to get?
        history.push('/success');
      })
      .catch((err) => {
        console.log('POST error!', err);
      });
  };

  let review = [];
  for (const [key, value] of Object.entries(feedback)) {
    review.push(`${key.capitalize()}: ${value}`);
  }

  const reviewList = review.map((item, index) => {
    return <h2 key={index}>{item}</h2>;
  });

  return (
    <div>
      <h4>Review</h4>
      {reviewList}
      <button onClick={onClickSubmit}>Submit!</button>
    </div>
  );
};

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Review);
