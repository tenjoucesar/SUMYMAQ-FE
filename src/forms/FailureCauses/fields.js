import React from 'react';
import { BigFormRadioGroup } from 'components/Form/RadioGroup';
import { Field } from 'react-final-form';
import { MiniFormTextField } from 'components/Form/Input';

// export const formFields = [
//   <FormRadioGroup label="Corto Circuito en el bobinado" name="windingHasShortCut" required={true} />,
//   <FormRadioGroup label="Corto circuito por exceso de carga (bobinado recalentado)?" name="terminalBlockInGoodCondition" required={true} />,
//   <FormRadioGroup label="Corto circuito por presencia de agua, grasa, polvo u otro contaminante" name="conecctionBoxInGoodCondition" required={true} />,
//   <FormRadioGroup label="Corto circuito por fallo mecánico (desgaste del rotor o fallo de rodamientos)" name="hasFan" required={true} />,
//   <FormRadioGroup label="Corto circuito por perdida de fase (2 fases)" name="coverNeedsJacket" required={true} />,
//   <FormRadioGroup label="Corto circuito en el rotor (rotor bobinado)" name="coverNeedsJacket" required={true} />,
//   <Field name="Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
// ];

export const formFields = [
  <BigFormRadioGroup name="failureCauses.windingHasShortCut" label="Corto Circuito en el bobinado" num={1} />,
  <BigFormRadioGroup name="failureCauses.terminalBlockInGoodCondition" label="Corto circuito por exceso de carga (bobinado recalentado)?" num={2} />,
  <BigFormRadioGroup name="failureCauses.conecctionBoxInGoodCondition" label="Corto circuito por presencia de agua, grasa, polvo u otro contaminante" num={3} />,
  <BigFormRadioGroup name="failureCauses.hasFan" label="Corto circuito por fallo mecánico (desgaste del rotor o fallo de rodamientos)" num={4} />,
  <BigFormRadioGroup name="failureCauses.coverNeedsJacket" label="Corto circuito por perdida de fase (2 fases)" num={5} />,
  <BigFormRadioGroup name="failureCauses.coverNeedsJacket" label="Corto circuito en el rotor (rotor bobinado)" num={6} />,
  <Field name="Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' num={7} />,
];