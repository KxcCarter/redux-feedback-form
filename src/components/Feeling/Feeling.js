import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//--- CSS ---

//--- Components ---

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, Box } from '@material-ui/core';

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
    history.push('/2');
  };

  const handleInputChange = (event) => {
    setFeelingLevel(event.target.value);
  };

  return (
    <div>
      <h3>Feeling</h3>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            How do you feel about today's concepts? (between 0 and 5):
          </FormLabel>
          <RadioGroup
            row
            aria-label="feeling"
            name="feelingRating"
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="1"
              labelPlacement="top"
              control={<Radio required />}
              label="1"
            />
            <FormControlLabel
              value="2"
              labelPlacement="top"
              control={<Radio required />}
              label="2"
            />
            <FormControlLabel
              value="3"
              labelPlacement="top"
              control={<Radio required />}
              label="3"
            />
            <FormControlLabel
              value="4"
              labelPlacement="top"
              control={<Radio required />}
              label="4"
            />
            <FormControlLabel
              value="5"
              labelPlacement="top"
              control={<Radio required />}
              label="5"
            />
          </RadioGroup>
          <Box justifyContent="center">
            <Button variant="contained" type="submit">
              Save and Next
            </Button>
          </Box>
        </FormControl>
      </form>
    </div>
  );
};

export default connect()(Feeling);
