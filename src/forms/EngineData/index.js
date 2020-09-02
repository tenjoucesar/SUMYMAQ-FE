import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer, FixedHeigthInputsContainer } from 'sharedComponents/Containers';
import { Typography }from '@material-ui/core';
import { ElectricFields, MainFields } from './fields';

const EngineDataForm = () => (
  <BoxContainer title='Ingresa los datos del Equipo'>
    <ScrollableFormContainer>
      <FixedHeigthInputsContainer>
        <MainFields />
        <ElectricFields />
      </FixedHeigthInputsContainer>
    </ScrollableFormContainer>
  </BoxContainer>
);

export default EngineDataForm;