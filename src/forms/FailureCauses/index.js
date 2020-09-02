import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer, FixedHeigthInputsContainer } from 'sharedComponents/Containers';
import { formFields } from './fields';

const FailureCausesForm = () => (
  <BoxContainer title='Ingresa los datos de la inspeccion preliminar'>
        <ScrollableFormContainer>
          <FixedHeigthInputsContainer>
            {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
          </FixedHeigthInputsContainer>
        </ScrollableFormContainer>
  </BoxContainer>
);

export default FailureCausesForm;