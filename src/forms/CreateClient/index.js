import React from 'react';
import FormTextField from 'components/Form/Input';
import BoxContainer from 'sharedComponents/BoxContainer';
import { FormContainer } from 'sharedComponents/Containers';
import { Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';

const formFields = [
  <Field name="name" component={FormTextField} label='Nombre y Apellidos' type='text' required validate={required} />,
  <Field name="mail" component={FormTextField} label='Correo Electronico' type='text' required validate={required} />,
  <Field name="phone" component={FormTextField} label='Telefono' type='number' required validate={composeValidators(required, mustBeNumber, validPhoneNumber)}/>,
  <Field name="address" component={FormTextField} label='Dirección' type='text' multiline rows={4} required validate={required} />,
];

const createClientForm = () => (
  <BoxContainer title='Ingresa los datos del cliente'>
    <FormContainer>
      {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
    </FormContainer>
  </BoxContainer>
);

export default createClientForm;