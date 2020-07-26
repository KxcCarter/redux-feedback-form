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
import { Button, Box, Typography } from '@material-ui/core';

const Support = () => {
  const [supportLevel, setSupportLevel] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_SUPPORT',
      payload: supportLevel,
    });
    setSupportLevel('');
    history.push('/4');
  };

  const handleInputChange = (event) => {
    setSupportLevel(event.target.value);
  };

  return (
    <div>
      <Typography variant="h3">Support</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <Box m={3}>
            <FormLabel component="legend">
              How supported do you feel today?
            </FormLabel>
            <RadioGroup
              row
              aria-label="supportQuality"
              name="supportQualityRating"
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
          </Box>
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

export default connect()(Support);
