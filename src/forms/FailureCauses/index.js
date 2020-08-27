import React from 'react';
import FormRadioGroup from 'components/Form/RadioGroup';
import BoxContainer from 'sharedComponents/BoxContainer';
import { Field } from 'react-final-form';
import { MiniFormTextField } from 'components/Form/Input';
import { ScrollableFormContainer, InputsContainer } from 'sharedComponents/Containers';

const formFields = [
  <FormRadioGroup label="Corto Circuito en el bobinado" name="windingHasShortCut" required={true} />,
  <FormRadioGroup label="Corto circuito por exceso de carga (bobinado recalentado)?" name="terminalBlockInGoodCondition" required={true} />,
  <FormRadioGroup label="Corto circuito por presencia de agua, grasa, polvo u otro contaminante" name="conecctionBoxInGoodCondition" required={true} />,
  <FormRadioGroup label="Corto circuito por fallo mecánico (desgaste del rotor o fallo de rodamientos)" name="hasFan" required={true} />,
  <FormRadioGroup label="Corto circuito por perdida de fase (2 fases)" name="coverNeedsJacket" required={true} />,
  <FormRadioGroup label="Corto circuito en el rotor (rotor bobinado)" name="coverNeedsJacket" required={true} />,
  <Field name="Observations" component={MiniFormTextField} label='Observaciones' multiline rows={3} type='text' />,
];

const FailureCausesForm = () => (
  <BoxContainer title='Ingresa los datos de la inspeccion preliminar'>
        <ScrollableFormContainer>
          <InputsContainer>
            {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
          </InputsContainer>
        </ScrollableFormContainer>
  </BoxContainer>
);

export default FailureCausesForm;