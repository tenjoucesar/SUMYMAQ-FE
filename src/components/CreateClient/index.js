import React from 'react';
import {Button, Typography} from '@material-ui/core';
import styled from 'styled-components';
import FormTextField from 'components/Form/Input';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Form, Field } from 'react-final-form'
import { required, composeValidators, mustBeNumber, validPhoneNumber } from '../Form/validations';
import { CLIENTS_API } from 'utils/api';
import { formatData } from './ultis';

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
function createClientForm({subscription}) {

  const onSubmit = async (values, form) => {
    await sleep(300)
    debugger;
    window.alert(JSON.stringify(values, 0, 2));
    createClient(values, form);
  }

  function createClient(values, form) {
    const fortmatedClientValues = formatData(values);
    const parsedValues = JSON.stringify(fortmatedClientValues);
    debugger;

    fetch(CLIENTS_API, {
      method: 'POST',
      body: parsedValues,
      headers: { 'Content-Type': 'application/json',},
      }).then(response => response.json())
      .catch((error) => { throw error; });
      debugger;
      form.reset(form.initialValues);
    }

  // useEffect(() => {
  // }, [])

  // const onSumbit = { restart } => setTimeout(() => restart())

  return(
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
        <Field name="address" component={FormTextField} label='Dirección' type='text' multiline rows={4} validate={required} />
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
}

export default createClientForm;