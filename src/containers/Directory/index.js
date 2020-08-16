import React from 'react'
import SideNavigationBar from 'components/SideNavigationBar';
import StepsIndicator from 'components/StepsIndicator';

function Directory () {

  return (
    <div style={{display: 'flex', }}>
      <SideNavigationBar/>
      <div>
        <StepsIndicator />
      </div>
    </div>
  );
}

export default Directory;