import React from 'react';
import styled from 'styled-components';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer, InputsContainer } from 'sharedComponents/Containers';
import { formFields } from './fields';

const AdjustedInputsContainer = styled(InputsContainer)`
  flex-direction: column;
  flex-wrap: nowrap;
`;

const CreateClientForm = () => (
  <BoxContainer title='Ingresa los datos del cliente'>
    <ScrollableFormContainer>
      <AdjustedInputsContainer>
        {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
      </AdjustedInputsContainer>
    </ScrollableFormContainer>
  </BoxContainer>
);

export default CreateClientForm;