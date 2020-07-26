import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Box } from '@material-ui/core';

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
    return (
      <Typography variant="h5" key={index}>
        {item}
      </Typography>
    );
  });

  return (
    <div>
      <Typography variant="h3">Review</Typography>
      <Box m={3}>{reviewList}</Box>
      <Button variant="contained" onClick={onClickSubmit}>
        Submit!
      </Button>
    </div>
  );
};

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Review);
