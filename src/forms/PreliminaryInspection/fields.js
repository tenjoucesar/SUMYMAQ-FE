import React from 'react';
import FormRadioGroup from 'components/Form/RadioGroup';
import ConditionalField from 'components/ConditionalField';
import { MiniFormTextField } from 'components/Form/Input';
import { Field } from 'react-final-form';

// export const formFields = [
//   <FormRadioGroup label="Placa de datos en buenas condiciones" name="preliminaryInspection.plateInGoodCondition" required={true} />,
//   <FormRadioGroup label="Carcaza del motor en buenas condiciones" name="preliminaryInspection.HousingInGoodCondition" required={true} />,
//   <FormRadioGroup label="Trae Bornera?" name="preliminaryInspection.hasTerminalBlock" required={true} />,
//   <ConditionalField when="hasTerminalBlock" is="true">
//     <FormRadioGroup label="La bornera se encuentra en buenas condiciones?" name="preliminaryInspection.terminalBlockInGoodCondition" required={true} />
//   </ConditionalField>,
//   <FormRadioGroup label="Caja de conexiones en buenas condiciones" name="preliminaryInspection.conecctionBoxInGoodCondition" required={true} />,
//   <FormRadioGroup label="Trae Abanico?" name="preliminaryInspection.hasFan" required={true} />,
//   <ConditionalField when="hasFan" is="true">
//     <FormRadioGroup label="Abanico en buenas condiciones" name="preliminaryInspection.fanInGoodCondition" required={true} />,
//   </ConditionalField>,
//   <FormRadioGroup label="Las patas se encuentran en buenas condiciones?" name="preliminaryInspection.legsInGoodCondition" required={true} />,
//   <FormRadioGroup label="El impulsor se encuentra en buenas condiciones?" name="preliminaryInspection.impellerInGoodCondition" required={true} />,
//   <FormRadioGroup label="El nucleo esta en buenas condiciones?" name="preliminaryInspection.nucleusInGoodCondition" required={true} />,
//   <FormRadioGroup label="El rotor esta en buenas condiciones?" name="preliminaryInspection.rotorInGoodCondition" required={true} />,
//   <FormRadioGroup label="Es necesario relleno y rectificación del rotor?" name="preliminaryInspection.needsFillingAndRectification" required={true} />,
//   <FormRadioGroup label="Las tapas se encuentran en buenas condiciones?" name="preliminaryInspection.CoversInGoodCondition" required={true} />,
//   <FormRadioGroup label="Es necesario el encamisado de alguna tapa?" name="preliminaryInspection.coverNeedsJacket" required={true} />,
//   <Field name="preliminaryInspection.Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
// ];

export const formFields = [
  <FormRadioGroup name="preliminaryInspection.plateInGoodCondition" label="Placa de datos en buenas condiciones" />,
  <FormRadioGroup name="preliminaryInspection.HousingInGoodCondition" label="Carcaza del motor en buenas condiciones" />,
  <FormRadioGroup name="preliminaryInspection.hasTerminalBlock" label="Trae Bornera?" />,
  <ConditionalField when="preliminaryInspection.hasTerminalBlock" is="true">
    <FormRadioGroup name="preliminaryInspection.terminalBlockInGoodCondition" label="La bornera se encuentra en buenas condiciones?" />
  </ConditionalField>,
  <FormRadioGroup name="preliminaryInspection.conecctionBoxInGoodCondition" label="Caja de conexiones en buenas condiciones" />,
  <FormRadioGroup name="preliminaryInspection.hasFan" label="Trae Abanico?" />,
  <ConditionalField when="preliminaryInspection.hasFan" is="true">
    <FormRadioGroup name="preliminaryInspection.fanInGoodCondition" label="Abanico en buenas condiciones" />,
  </ConditionalField>,
  <FormRadioGroup name="preliminaryInspection.legsInGoodCondition" label="Las patas se encuentran en buenas condiciones?" />,
  <FormRadioGroup name="preliminaryInspection.impellerInGoodCondition" label="El impulsor se encuentra en buenas condiciones?" />,
  <FormRadioGroup name="preliminaryInspection.nucleusInGoodCondition" label="El nucleo esta en buenas condiciones?" />,
  <FormRadioGroup name="preliminaryInspection.rotorInGoodCondition" label="El rotor esta en buenas condiciones?" />,
  <FormRadioGroup name="preliminaryInspection.needsFillingAndRectification" label="Es necesario relleno y rectificación del rotor?" />,
  <FormRadioGroup name="preliminaryInspection.CoversInGoodCondition" label="Las tapas se encuentran en buenas condiciones?" />,
  <FormRadioGroup name="preliminaryInspection.coverNeedsJacket" label="Es necesario el encamisado de alguna tapa?" />,
  <Field name="preliminaryInspection.Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
];