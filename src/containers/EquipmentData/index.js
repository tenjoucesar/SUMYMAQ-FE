import React from 'react';
import styled from 'styled-components';
import { MiniFormTextField } from 'components/Form/Input';
import { Button, Typography, Paper } from '@material-ui/core';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';
import { CLIENTS_API } from 'utils/api';
import Fetch from 'services/FetchService';

const Container = styled(Paper)`
  padding: 0 10px 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
`;

const MainContainer = styled.div`
  margin-top: 50px;
  padding: 0 30px;
  width: 100%;
  overflow
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
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 20px 0;
  margin: 0 auto;
  width: 70vw;
  max-height: 600px;
  overflow-y: scroll;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

const InputsContainers = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
        <InputsContainers>
          <Field name="type" component={MiniFormTextField} label='Tipo de Equipo' type='text' required validate={required} />
          <Field name="marca" component={MiniFormTextField} label='Marca' type='text' required validate={required} />
          <Field name="model" component={MiniFormTextField} label='Modelo' type='number' required validate={composeValidators(required, mustBeNumber, validPhoneNumber)}/>
          <Field name="typo" component={MiniFormTextField} label='Typo' type='text' required validate={required} />
          <Field name="serie" component={MiniFormTextField} label='Serie' type='text' required validate={required} />
          <Field name="class" component={MiniFormTextField} label='Clase' type='text' required validate={required} />
          <Field name="letterDesign" component={MiniFormTextField} label='Letra Diseño' type='text' required validate={required} />
          <Field name="power" component={MiniFormTextField} label='Potencia' type='text' required validate={required} />
          <Field name="voltage" component={MiniFormTextField} label='Voltaje' type='text' required validate={required} />
          <Field name="amperage" component={MiniFormTextField} label='Amperaje' type='text' required validate={required} />
          <Field name="r.p.m" component={MiniFormTextField} label='R.P.M' type='text' required validate={required} />
          <Field name="frame" component={MiniFormTextField} label='Frame' type='text' required validate={required} />
          <Field name="frecuence" component={MiniFormTextField} label='Frecuencia' type='text' required validate={required} />
          <Field name="serviceFact" component={MiniFormTextField} label='Factor de Servicio' type='text' required validate={required} />
          <Field name="codeLetter" component={MiniFormTextField} label='Codigo Letra' type='text' required validate={required} />
          <Field name="serialNumber" component={MiniFormTextField} label='Numero Serie' type='text' required validate={required} />
        </InputsContainers>
        <div>
          <Field name="other" component={MiniFormTextField} label='Otros Datos' multiline rows={3} type='text' required validate={required} />
        </div>
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