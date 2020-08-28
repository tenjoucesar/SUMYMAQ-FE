import React from 'react';
import { MiniFormTextField } from 'components/Form/Input';
import { Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';

// export const formFields = [
//   <Field name="electricalData.type" component={MiniFormTextField} label='Tipo de Equipo' type='text' required validate={required} />,
//   <Field name="electricalData.Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
// ]

export const formFields = [
  <Field name="electricalData.type" component={MiniFormTextField} label='Tipo de Equipo' type='text' />,
  <Field name="electricalData.Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
]