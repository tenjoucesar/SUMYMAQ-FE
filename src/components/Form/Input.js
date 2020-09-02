import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledTextInput = styled(TextField)`
  margin: 15px;
  width: 350px;
`;

export const FormTextField = ({
  input: { name, onChange, value, ...restInput },
  meta,
  label,
  ...rest
}) => (
  <StyledTextInput
    {...rest}
    name={name && name}
    helperText={meta.touched && meta.error? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    label={label}
    id="outlined-basic"
    variant="outlined"
    value={value}
  />
);

const StyledMiniTextInput = styled(StyledTextInput)`
  margin: 15px 30px;
  width: 200px;
`;

export const MiniFormTextField = ({
  input: { name, onChange, value, ...restInput },
  meta,
  label,
  ...rest
}) => (
  <StyledMiniTextInput
    {...rest}
    name={name && name}
    helperText={meta.touched && meta.error? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    label={label}
    id="outlined-basic"
    variant="outlined"
    value={value}
  />
);