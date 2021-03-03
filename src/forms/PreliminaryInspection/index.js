import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer, FixedHeigthInputsContainer } from 'sharedComponents/Containers';
import { formFields } from './fields';

const PreliminaryInspectionForm = () => (
  <BoxContainer title='Ingresa los datos Electricos Preliminares'>
    <ScrollableFormContainer >
      <FixedHeigthInputsContainer>
        {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
      </FixedHeigthInputsContainer>
    </ScrollableFormContainer>
  </BoxContainer>
);

export default PreliminaryInspectionForm;