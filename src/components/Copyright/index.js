import React from 'react'
import { Typography, Link, Box } from '@material-ui/core';

const Copyright = () =>  (
  <Box mt={8}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        SUMYMAQ
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
);

export default Copyright;
