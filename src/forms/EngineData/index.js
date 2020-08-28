import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer, InputsContainer } from 'sharedComponents/Containers';
import { formFields } from './fields';

const EngineDataForm = () => (
  <BoxContainer title='Ingresa los datos del Equipo'>
    <ScrollableFormContainer>
      <InputsContainer>
        {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
      </InputsContainer>
    </ScrollableFormContainer>
  </BoxContainer>
);

export default EngineDataForm;