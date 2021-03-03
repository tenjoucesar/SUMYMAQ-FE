import React from 'react';
import styled from 'styled-components';
import { FormTextField } from 'components/Form/Input';
import { Field } from 'react-final-form';
import { required, composeValidators, musnstBeNumber, validPhoneNumber } from 'components/Form/validations';
import { Typography, Divider }from '@material-ui/core';
import { InputsContainer } from 'sharedComponents/Containers';

const FieldTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.334;
  letter-spacing: -0.05px;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledDivider = styled(Divider)`
  background-color: rgba(0, 0, 0, 0.22);
  margin: 10px 0;
`;

export const MainFields = () => (
  <div>
    <FieldTitle> Datos Principales</FieldTitle>
    <StyledDivider variant="middle"/>
    <InputsContainer>
      <Field name="engine.type" component={FormTextField} label='Tipo de Equipo' type='text' />
      <Field name="engine.brand" component={FormTextField} label='Marca' type='text' />
      <Field name="engine.model" component={FormTextField} label='Modelo' type='number' />
      <Field name="engine.serie" component={FormTextField} label='Serie' type='text' />
      <Field name="engine.class" component={FormTextField} label='Clase' type='text' />
      <Field name="engine.typo" component={FormTextField} label='Typo' type='text' />
      <Field name="engine.serialNumber" component={FormTextField} label='Numero Serie' type='text' />
      <Field name="engine.designLetter" component={FormTextField} label='Letra Diseño' type='text' />
    </InputsContainer>
  </div>
);

export const ElectricFields = () => (
<div>
  <StyledDivider variant="middle" />
  <FieldTitle>Datos Electricos</FieldTitle>
  <InputsContainer>
    <Field name="engine.power" component={FormTextField} label='Potencia' type='text' />
    <Field name="engine.voltage" component={FormTextField} label='Voltaje' type='text' />
    <Field name="engine.amperage" component={FormTextField} label='Amperaje' type='text' />
    <Field name="engine.r.p.m" component={FormTextField} label='R.P.M' type='text' />
    <Field name="engine.frame" component={FormTextField} label='Frame' type='text' />
    <Field name="engine.frequency" component={FormTextField} label='Frecuencia' type='text' />
    <Field name="engine.serviceFact" component={FormTextField} label='Factor de Servicio' type='text' />
    <Field name="engine.letterCode" component={FormTextField} label='Codigo Letra' type='text' />
    <Field name="engine.other" component={FormTextField} label='Otros Datos' multiline rows={3} type='text' />
  </InputsContainer>
</div>
);

export const formFields = [
];
