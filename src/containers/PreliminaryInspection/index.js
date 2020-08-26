import React from 'react';
import styled from 'styled-components';
import { MiniFormTextField } from 'components/Form/Input';
import { Button, Typography, Paper } from '@material-ui/core';
import { CloudUpload, Delete } from '@material-ui/icons';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';
import { CLIENTS_API } from 'utils/api';
import Fetch from 'services/FetchService';
import FormRadioGroup from 'components/Form/RadioGroup';
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
  flex-wrap: wrap;
  flex-direction: row;
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
  max-height: 600px;
  overflow-y: scroll;
`;

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: 'true' }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
function preliminaryInspectionForm({subscription}) {

  const formFields = [
    <FormRadioGroup label="Placa de datos en buenas condiciones" name="plateInGoodCondition" required={true} />,
    <FormRadioGroup label="Carcaza del motor en buenas condiciones" name="HousingInGoodCondition" required={true} />,
    <FormRadioGroup label="Caja de conexiones en buenas condiciones" name="conecctionBoxInGoodCondition" required={true} />,
    <FormRadioGroup label="Trae Bornera?" name="hasTerminalBlock" required={true} />,
    <Condition when="hasTerminalBlock" is="true">
      <FormRadioGroup label="La bornera se encuentra en buenas condiciones?" name="terminalBlockInGoodCondition" required={true} />
    </Condition>,
    <FormRadioGroup label="Trae Abanico?" name="hasFan" required={true} />,
    <Condition when="hasFan" is="true">
      <FormRadioGroup label="Abanico en buenas condiciones" name="fanInGoodCondition" required={true} />,
    </Condition>,
    <FormRadioGroup label="Las patas se encuentran en buenas condiciones?" name="legsInGoodCondition" required={true} />,
    <FormRadioGroup label="El impulsor se encuentra en buenas condiciones?" name="impellerInGoodCondition" required={true} />,
    <FormRadioGroup label="El nucleo esta en buenas condiciones?" name="nucleusInGoodCondition" required={true} />,
    <FormRadioGroup label="El rotor esta en buenas condiciones?" name="rotorInGoodCondition" required={true} />,
    <FormRadioGroup label="Es necesario relleno y rectificación del rotor?" name="needsFillingAndRectification" required={true} />,
    <FormRadioGroup label="Las tapas se encuentran en buenas condiciones?" name="CoversInGoodCondition" required={true} />,
    <FormRadioGroup label="Es necesario el encamisado de alguna tapa?" name="coverNeedsJacket" required={true} />,
    <Field name="Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
  ]


  const onSubmit = async (values, form) => {
    await sleep(300)
    debugger;
    createPreliminaryInspection(values, form);
  }

  async function createPreliminaryInspection(values, form) {
    // debugger;
    // const request = await Fetch.post(CLIENTS_API, values);
    // debugger;
    // if (request.status == 200) form.reset(form.initialValues);
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
        {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
        </InputsContainers>
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

export default preliminaryInspectionForm;