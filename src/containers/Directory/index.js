import React from 'react'
import SideNavigationBar from 'components/SideNavigationBar';
import StepsIndicator from 'components/StepsIndicator';
import CreateClient from 'components/CreateClient';

function Directory () {

  return (
    <div style={{display: 'flex', }}>
      <SideNavigationBar/>
      <div>
        <StepsIndicator />
        <CreateClient subscription={{ submitting: true, pristine: true }}/>
      </div>
    </div>
  );
}

export default Directory;