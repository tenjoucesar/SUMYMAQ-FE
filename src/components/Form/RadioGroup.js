import React from 'react';
import styled from 'styled-components';
import { Radio, RadioGroup, FormControlLabel, Typography }from '@material-ui/core';

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled(Typography)`
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
`;

const FormRadioGroup = ({
  input: { checked, name, onChange, value, ...restInput },
  meta,
  label,
  ...rest
}) => (
  <RadioGroupContainer>
    <StyledLabel component="p" variant='subtitle1' color='textSecondary' >{label}</StyledLabel>
    <RadioGroup row aria-label={name} name={name} defaultValue="Si">
      <FormControlLabel
        value={`${name}yes`}
        control={<Radio color="primary" />}
        label="Si"
        labelPlacement="top"
      />
      <FormControlLabel
        value={`${name}no`}
        control={<Radio color="secondary" />}
        label="No"
        labelPlacement="top"
      />
    </RadioGroup>
  </RadioGroupContainer>
);

export default FormRadioGroup;