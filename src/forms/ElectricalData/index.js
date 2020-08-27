import React from 'react';
import { MiniFormTextField } from 'components/Form/Input';
import { Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer, InputsContainer } from 'sharedComponents/Containers';

const formFields = [
  <Field name="type" component={MiniFormTextField} label='Tipo de Equipo' type='text' required validate={required} />,
  <Field name="Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
]
const ElectricalDataForm = () => (
  <BoxContainer title='Ingresa los datos de la inspeccion preliminar'>
    <ScrollableFormContainer >
      <InputsContainer>
        {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
      </InputsContainer>
    </ScrollableFormContainer>
  </BoxContainer>
);

export default ElectricalDataForm;