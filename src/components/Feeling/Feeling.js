import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//--- CSS ---

//--- Components ---

const Feeling = () => {
  const [feelingLevel, setFeelingLevel] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_FEELING',
      payload: feelingLevel,
    });
    setFeelingLevel('');
    // history.push('/2');
  };

  const handleInputChange = (event) => {
    setFeelingLevel(event.target.value);
  };

  return (
    <div>
      <h3>Feeling</h3>
      <h4> How are you feeling about today's concepts? (between 0 and 5):</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="1">1</label>
        <input
          type="radio"
          id="1"
          name="feel"
          required
          value="1"
          onChange={handleInputChange}
        />
        <label htmlFor="2">2</label>
        <input
          type="radio"
          id="2"
          name="feel"
          required
          value="2"
          onChange={handleInputChange}
        />
        <label htmlFor="3">3</label>
        <input
          type="radio"
          id="3"
          name="feel"
          required
          value="3"
          onChange={handleInputChange}
        />
        <label htmlFor="4">4</label>
        <input
          type="radio"
          id="4"
          name="feel"
          required
          value="4"
          onChange={handleInputChange}
        />
        <label htmlFor="5">5</label>
        <input
          type="radio"
          id="5"
          name="feel"
          required
          value="5"
          onChange={handleInputChange}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default connect()(Feeling);
