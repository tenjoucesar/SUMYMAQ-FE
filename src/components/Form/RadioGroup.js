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

const BigContainer = styled(Container)`
  height: 140px;
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

const NumberContainer = styled.div`
  padding: 7px;
  width: 30px;
  margin-top: -35px;
  display: flex;
  justify-content: center;
  background: linear-gradient(60deg, #26c6da, #00acc1);
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4);
`;

const Number = styled(Typography)`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;


const FormRadioGroup = ({ label, name, required, num }) => (
  <Container elevation={3}>
    <NumberContainer><Number component='h3'>{num}</Number></NumberContainer>
    <RadioGroupContainer>
    <StyledLabel component="p" variant='subtitle1' color='textSecondary' >{label}</StyledLabel>
    <Radios name={name} required={required} radioGroupProps={{ row: true }} data={[
      {label: 'Si', value: 'true'},
      {label: 'No', value: 'false'},
    ]} />
    </RadioGroupContainer>
  </Container>
);

export default FormRadioGroup;

export const BigFormRadioGroup = ({ label, name, required, num }) => (
  <BigContainer elevation={3}>
    <NumberContainer><Number component='h3'>{num}</Number></NumberContainer>
    <RadioGroupContainer>
    <StyledLabel component="p" variant='subtitle1' color='textSecondary' >{label}</StyledLabel>
    <Radios name={name} required={required} radioGroupProps={{ row: true }} data={[
      {label: 'Si', value: 'true'},
      {label: 'No', value: 'false'},
    ]} />
    </RadioGroupContainer>
  </BigContainer>
);
