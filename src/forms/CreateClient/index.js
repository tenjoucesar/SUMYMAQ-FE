import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { FormContainer } from 'sharedComponents/Containers';
import { formFields } from './fields';

const createClientForm = () => (
  <BoxContainer title='Ingresa los datos del cliente'>
    <FormContainer>
      {formFields.map((item, idx) => <div key={idx}>{item}</div>)}
    </FormContainer>
  </BoxContainer>
);

export default createClientForm;