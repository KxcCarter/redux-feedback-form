import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//--- CSS ---

//--- Components ---
import TextField from '@material-ui/core/TextField';
import { Button, Box, Typography } from '@material-ui/core';

const Comments = () => {
  const [comments, setComments] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_COMMENT',
      payload: comments,
    });
    setComments('');
    history.push('/review');
  };

  const handleInputChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <div>
      <Typography variant="h3">Comments</Typography>
      <Box m={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            rowsMax={5}
            label="Optional Comments"
            variant="outlined"
            onChange={handleInputChange}
          />
          <Box justifyContent="center" mt={3}>
            <Button type="submit" variant="contained">
              Save and Review
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default connect()(Comments);
