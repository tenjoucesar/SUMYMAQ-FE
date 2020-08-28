import React from 'react'
import FormTextField from 'components/Form/Input';
import { Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';

// const formFields = [
//   <Field name="client.name" component={FormTextField} label='Nombre y Apellidos' type='text' required validate={required} />,
//   <Field name="client.mail" component={FormTextField} label='Correo Electronico' type='text' required validate={required} />,
//   <Field name="client.phone" component={FormTextField} label='Telefono' type='number' required validate={composeValidators(required, mustBeNumber, validPhoneNumber)}/>,
//   <Field name="client.address" component={FormTextField} label='Dirección' type='text' multiline rows={4} required validate={required} />,
// ];

export const formFields = [
  <Field name="client.name" component={FormTextField} label='Nombre y Apellidos' type='text' />,
  <Field name="client.mail" component={FormTextField} label='Correo Electronico' type='text' />,
  <Field name="client.phone" component={FormTextField} label='Telefono' type='number' />,
  <Field name="client.address" component={FormTextField} label='Dirección' type='text' multiline rows={4} />,
];