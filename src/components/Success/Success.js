import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

//--- CSS ---

//--- Components ---

const Success = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/1');
  };

  return (
    <div>
      <h1>Thank You!</h1>
      <h3>Feedback submitted!</h3>
      <button onClick={handleClick}>Leave New Feedback</button>
    </div>
  );
};

export default connect()(Success);
