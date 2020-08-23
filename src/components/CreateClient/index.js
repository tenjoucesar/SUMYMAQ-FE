import React from 'react';
import styled from 'styled-components';
import FormTextField from 'components/Form/Input';
import { Button, Typography } from '@material-ui/core';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from '../Form/validations';
import { CLIENTS_API } from 'utils/api';
import Fetch from 'services/FetchService';

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
    createClient(values, form);
  }

  async function createClient(values, form) {
    debugger;
    const request = await Fetch.post(CLIENTS_API, values);
    debugger;
    if (request.status == 200) form.reset(form.initialValues);
  }

  return(
    <Form
    onSubmit={onSubmit}
    subscription={subscription}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h2">
          Ingresa los datos del cliente
        </Typography>
        <Field name="name" component={FormTextField} label='Nombre y Apellidos' type='text' required validate={required} />
        <Field name="mail" component={FormTextField} label='Correo Electronico' type='text' required validate={required} />
        <Field name="phone" component={FormTextField} label='Telefono' type='number' required validate={composeValidators(required, mustBeNumber, validPhoneNumber)}/>
        <Field name="address" component={FormTextField} label='Dirección' type='text' multiline rows={4} required validate={required} />
        <div>
          <StyledButton
            variant="contained"
            color="primary"
            size="large"
            endIcon={<CloudUpload/>}
            type="submit"
            disabled={submitting || pristine}
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