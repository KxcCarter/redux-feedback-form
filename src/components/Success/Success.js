import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Box } from '@material-ui/core';

//--- Components ---

const Success = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/1');
  };

  return (
    <div>
      <Typography variant="h2">Thank You!</Typography>
      <Box m={3}>
        <Typography variant="h4">Feedback submitted!</Typography>
      </Box>
      <Button variant="contained" onClick={handleClick}>
        Leave New Feedback
      </Button>
    </div>
  );
};

export default connect()(Success);
