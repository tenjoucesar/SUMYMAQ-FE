import React from 'react';
import styled from 'styled-components';
import { Typography, Paper } from '@material-ui/core';

const Container = styled(Paper)`
  border-radius: 6px;
  margin: 50px auto 20px;
  padding: 0 30px 5px;
`;

const TitleContainer = styled.div`
  background: linear-gradient(60deg, #ec407a, #d81b60);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(233, 30, 99,.4);
  display: inline-block;
  padding: 30px 20px;
  border-radius: 9px;
  margin-top: -30px;
  color: #fff;
`;

const BoxContainer = ({title, children}) => (
  <Container elevation={3}>
    <TitleContainer>
      <Typography variant="h5" color="inherit">{title}</Typography>
    </TitleContainer>
    {children}
  </Container>
);

export default BoxContainer;