import React from 'react';
import FormRadioGroup from 'components/Form/RadioGroup';
import BoxContainer from 'sharedComponents/BoxContainer';
import ConditionalField from 'components/ConditionalField';
import { MiniFormTextField } from 'components/Form/Input';
import { Field } from 'react-final-form';
import { ScrollableFormContainer, InputsContainer } from 'sharedComponents/Containers';

const formFields = [
  <FormRadioGroup label="Placa de datos en buenas condiciones" name="plateInGoodCondition" required={true} />,
  <FormRadioGroup label="Carcaza del motor en buenas condiciones" name="HousingInGoodCondition" required={true} />,
  <FormRadioGroup label="Trae Bornera?" name="hasTerminalBlock" required={true} />,
  <ConditionalField when="hasTerminalBlock" is="true">
    <FormRadioGroup label="La bornera se encuentra en buenas condiciones?" name="terminalBlockInGoodCondition" required={true} />
  </ConditionalField>,
  <FormRadioGroup label="Caja de conexiones en buenas condiciones" name="conecctionBoxInGoodCondition" required={true} />,
  <FormRadioGroup label="Trae Abanico?" name="hasFan" required={true} />,
  <ConditionalField when="hasFan" is="true">
    <FormRadioGroup label="Abanico en buenas condiciones" name="fanInGoodCondition" required={true} />,
  </ConditionalField>,
  <FormRadioGroup label="Las patas se encuentran en buenas condiciones?" name="legsInGoodCondition" required={true} />,
  <FormRadioGroup label="El impulsor se encuentra en buenas condiciones?" name="impellerInGoodCondition" required={true} />,
  <FormRadioGroup label="El nucleo esta en buenas condiciones?" name="nucleusInGoodCondition" required={true} />,
  <FormRadioGroup label="El rotor esta en buenas condiciones?" name="rotorInGoodCondition" required={true} />,
  <FormRadioGroup label="Es necesario relleno y rectificación del rotor?" name="needsFillingAndRectification" required={true} />,
  <FormRadioGroup label="Las tapas se encuentran en buenas condiciones?" name="CoversInGoodCondition" required={true} />,
  <FormRadioGroup label="Es necesario el encamisado de alguna tapa?" name="coverNeedsJacket" required={true} />,
  <Field name="Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
];

const PreliminaryInspectionForm = () => (
  <BoxContainer title='Ingresa los datos de la inspeccion preliminar'>
    <ScrollableFormContainer >
      <InputsContainer>
        {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
      </InputsContainer>
    </ScrollableFormContainer>
  </BoxContainer>
);

export default PreliminaryInspectionForm;