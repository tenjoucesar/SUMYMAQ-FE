import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledTextInput = styled(TextField)`
  margin: 15px 0;
  width: 290px;
`;

const FormTextField = ({
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
)
export default FormTextField;