import React from 'react';
import styled from 'styled-components';
import { MiniFormTextField } from 'components/Form/Input';
import { Button, Typography } from '@material-ui/core';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';
import { CLIENTS_API } from 'utils/api';
import Fetch from 'services/FetchService';
import FormRadioGroup from 'components/Form/RadioGroup';

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 0;
  margin: 0 auto;
  width: 70vw;
`;

const StyledButton = styled(Button)`
  margin: 20px;
`;

const InputsContainers = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
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
    <Form
    onSubmit={onSubmit}
    subscription={subscription}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <StyledForm onSubmit={handleSubmit}>
        <InputsContainers>
        <Typography variant="h2" style={{textAlign: 'center'}}>
          Inspeccion Preliminar
        </Typography>
          <Field name="type" component={FormRadioGroup} label='Placa de datos en buenas condiciones' type="radio"  required validate={required} />
          <Field name="type" component={FormRadioGroup} label='Carcaza del motor en buenas condiciones' type="radio"  required validate={required} />
          <Field name="type" component={FormRadioGroup} label='Caja de conexiones en buenas condiciones' type="radio"  required validate={required} />
          <Field name="type" component={FormRadioGroup} label='Trae Bornera' type="radio"  required validate={required} />
          <Field name="type" component={FormRadioGroup} label='La bornera se encuentra en buenas condiciones' type="radio"  required validate={required} />
          <Field name="type" component={FormRadioGroup} label='Trae abanico' type="radio"  required validate={required} />
          <Field name="type" component={FormRadioGroup} label='El abanico se encuentra en buenas condiciones' type="radio"  required validate={required} />
          Trae abanico
        </InputsContainers>

        <div>
          <Field name="Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' required validate={required} />
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
  )
}

export default createClientForm;