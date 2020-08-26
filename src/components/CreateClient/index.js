import React from 'react';
import styled from 'styled-components';
import FormTextField from 'components/Form/Input';
import { Button, Typography, Paper } from '@material-ui/core';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from '../Form/validations';
import { CLIENTS_API } from 'utils/api';
import Fetch from 'services/FetchService';

const Container = styled(Paper)`
  padding: 0 10px 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
`;

const MainContainer = styled.div`
  margin-top: 50px;
  padding: 30px;
  width: 100%;
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
    <MainContainer>
      <Container elevation={3}>
        <TitleContainer>
          <Typography variant="h5" color="inherit">
            Ingresa los datos del cliente
          </Typography>
        </TitleContainer>
      <Form
      onSubmit={onSubmit}
      subscription={subscription}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <StyledForm onSubmit={handleSubmit}>
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
    </Container>
  </MainContainer>
  )
}

export default createClientForm;