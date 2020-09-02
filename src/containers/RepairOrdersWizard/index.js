import React from 'react';
import BoxContainer from 'sharedComponents/BoxContainer';
import { ScrollableFormContainer } from 'sharedComponents/Containers';
import CreateClientQuestion from 'containers/Directory';
import Wizard from 'components/Wizard';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  debugger;
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const RepairOrderWizard = () => (
  <BoxContainer title='Crear Solicitud de Reparacion'>
      <Wizard onSubmit={onSubmit} style={{margin: 'auto'}}>
    <ScrollableFormContainer >
      <Wizard.Page>
        <CreateClientQuestion subscription={{ submitting: true, pristine: true }}/>
      </Wizard.Page>
    </ScrollableFormContainer>
      </Wizard>
  </BoxContainer>
);

export default RepairOrderWizard;