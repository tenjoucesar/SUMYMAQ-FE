import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer, InputsContainer } from 'sharedComponents/Containers';
import { formFields } from './fields';

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