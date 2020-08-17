import React from 'react';
import {Button, Typography} from '@material-ui/core';
import styled from 'styled-components';
import FormTextField from 'components/Form/Input';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Form, Field } from 'react-final-form'
import { required, composeValidators, mustBeNumber, validPhoneNumber } from '../Form/validations';

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px auto;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const MyForm = ({ subscription }) => (
  <Form
    onSubmit={onSubmit}
    subscription={subscription}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h2">
          Ingresa los datos del cliente
        </Typography>
        <Field name="firstName" component={FormTextField} label='Nombre y Apellidos' type='text' validate={required} />
        <Field name="mail" component={FormTextField} label='Correo Electronico' type='text' validate={required} />
        <Field name="phone" component={FormTextField} label='Telefono' type='number' validate={composeValidators(required, mustBeNumber, validPhoneNumber)}/>
        <Field name="Address" component={FormTextField} label='Dirección' type='text' multiline rows={4} validate={required} />
        <div>
          <StyledButton
            variant="contained"
            color="primary"
            size="large"
            endIcon={<CloudUpload/>}
            type="submit"
            disabled={submitting}
          >
            Send
          </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<Delete/>}
            type="submit"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </StyledButton>
        </div>
      </StyledForm>
    )}
  />
)

export default MyForm;