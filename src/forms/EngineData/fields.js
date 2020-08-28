import React from 'react'
import { MiniFormTextField } from 'components/Form/Input';
import { Field } from 'react-final-form';
import { required, composeValidators, mustBeNumber, validPhoneNumber } from 'components/Form/validations';

// const formFields = [
//   <Field name="engine.type" component={MiniFormTextField} label='Tipo de Equipo' type='text' required validate={required} />,
//   <Field name="engine.marca" component={MiniFormTextField} label='Marca' type='text' required validate={required} />,
//   <Field name="engine.model" component={MiniFormTextField} label='Modelo' type='number' required validate={composeValidators(required, mustBeNumber, validPhoneNumber)} />,
//   <Field name="engine.typo" component={MiniFormTextField} label='Typo' type='text' required validate={required} />,
//   <Field name="engine.serie" component={MiniFormTextField} label='Serie' type='text' required validate={required} />,
//   <Field name="engine.class" component={MiniFormTextField} label='Clase' type='text' required validate={required} />,
//   <Field name="engine.letterDesign" component={MiniFormTextField} label='Letra Diseño' type='text' required validate={required} />,
//   <Field name="engine.power" component={MiniFormTextField} label='Potencia' type='text' required validate={required} />,
//   <Field name="engine.voltage" component={MiniFormTextField} label='Voltaje' type='text' required validate={required} />,
//   <Field name="engine.amperage" component={MiniFormTextField} label='Amperaje' type='text' required validate={required} />,
//   <Field name="engine.r.p.m" component={MiniFormTextField} label='R.P.M' type='text' required validate={required} />,
//   <Field name="engine.frame" component={MiniFormTextField} label='Frame' type='text' required validate={required} />,
//   <Field name="engine.frecuence" component={MiniFormTextField} label='Frecuencia' type='text' required validate={required} />,
//   <Field name="engine.serviceFact" component={MiniFormTextField} label='Factor de Servicio' type='text' required validate={required} />,
//   <Field name="engine.codeLetter" component={MiniFormTextField} label='Codigo Letra' type='text' required validate={required} />,
//   <Field name="engine.serialNumber" component={MiniFormTextField} label='Numero Serie' type='text' required validate={required} />,
//   <Field name="engine.other" component={MiniFormTextField} label='Otros Datos' multiline rows={3} type='text' required validate={required} />
// ];

export const formFields = [
  <Field name="engine.type" component={MiniFormTextField} label='Tipo de Equipo' type='text' />,
  <Field name="engine.marca" component={MiniFormTextField} label='Marca' type='text' />,
  <Field name="engine.model" component={MiniFormTextField} label='Modelo' type='number' />,
  <Field name="engine.typo" component={MiniFormTextField} label='Typo' type='text' />,
  <Field name="engine.serie" component={MiniFormTextField} label='Serie' type='text' />,
  <Field name="engine.class" component={MiniFormTextField} label='Clase' type='text' />,
  <Field name="engine.letterDesign" component={MiniFormTextField} label='Letra Diseño' type='text' />,
  <Field name="engine.power" component={MiniFormTextField} label='Potencia' type='text' />,
  <Field name="engine.voltage" component={MiniFormTextField} label='Voltaje' type='text' />,
  <Field name="engine.amperage" component={MiniFormTextField} label='Amperaje' type='text' />,
  <Field name="engine.r.p.m" component={MiniFormTextField} label='R.P.M' type='text' />,
  <Field name="engine.frame" component={MiniFormTextField} label='Frame' type='text' />,
  <Field name="engine.frecuence" component={MiniFormTextField} label='Frecuencia' type='text' />,
  <Field name="engine.serviceFact" component={MiniFormTextField} label='Factor de Servicio' type='text' />,
  <Field name="engine.codeLetter" component={MiniFormTextField} label='Codigo Letra' type='text' />,
  <Field name="engine.serialNumber" component={MiniFormTextField} label='Numero Serie' type='text' />,
  <Field name="engine.other" component={MiniFormTextField} label='Otros Datos' multiline rows={3} type='text' />
];
