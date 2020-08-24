import React, { useState } from 'react'
import SideNavigationBar from 'components/SideNavigationBar';
import StepsIndicator from 'components/StepsIndicator';
import CreateClientForm from 'components/CreateClient';
import ClientsList from 'components/ClientsList';
import { Button } from '@material-ui/core';

function Directory () {
  const [visibleClientForm, setVisibleClientForm] = useState(false);

  const displayClientContent = () => {

    return (
        <>
          <h2>Hola vamos a registar los datos del equipo</h2>
        </>
    )
  }
  return (
    <div   style={{display: 'flex', }}>
      <SideNavigationBar/>
      <div>
        <StepsIndicator />
        {displayClientContent()}
      </div>
    </div>
  );
}

export default Directory;