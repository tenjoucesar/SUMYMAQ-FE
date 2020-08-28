import React from 'react';
import Wizard from 'components/Wizard';
import CreateClientForm from 'forms/CreateClient';
import EngineDataForm from 'forms/EngineData';
import PreliminaryInspection from 'forms/PreliminaryInspection';
import FailureCauses from 'forms/FailureCauses';
import ElectricalDataForm from 'forms/ElectricalData';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  debugger;
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const ReportsWizard = () => {
  return (
    <div>
    <Wizard onSubmit={onSubmit} style={{margin: 'auto'}}>
      <Wizard.Page>
        <CreateClientForm subscription={{ submitting: true, pristine: true }}/>
      </Wizard.Page>
      <Wizard.Page>
        <EngineDataForm subscription={{ submitting: true, pristine: true }}/>
      </Wizard.Page>
      <Wizard.Page>
        <PreliminaryInspection subscription={{ submitting: true, pristine: true }}/>
      </Wizard.Page>
      <Wizard.Page>
        <FailureCauses subscription={{ submitting: true, pristine: true }}/>
      </Wizard.Page>
      <Wizard.Page>
        <ElectricalDataForm subscription={{ submitting: true, pristine: true }}/>
      </Wizard.Page>
    </Wizard>
    </div>
    );
}

export default ReportsWizard;
