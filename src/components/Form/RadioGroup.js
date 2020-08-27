import React from 'react';
import styled from 'styled-components';
import { Typography, Paper }from '@material-ui/core';
import { Radios } from 'mui-rff';

const Container = styled(Paper)`
  width: 300px;
  margin: 15px;
  height: 120px;
  padding: 15px 10px 0;
  border-radius: 6px;
  background: #FFF;
`;

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled(Typography)`
  text-align: center;
  margin-bottom: 15px;
  line-height: 1.4;
  font-size: 19px;
  color: rgba(0, 0, 0, 0.87);
`;

const FormRadioGroup = ({ label, name, required }) => (
  <Container elevation={3}>
    <RadioGroupContainer>
    <StyledLabel component="p" variant='subtitle1' color='textSecondary' >{label}</StyledLabel>
    <Radios name={name} required={required} radioGroupProps={{ row: true }} data={[
      {label: 'Si', value: 'true'},
      {label: 'No', value: 'false'},
    ]} />
    </RadioGroupContainer>
  </Container>
)

export default FormRadioGroup;
