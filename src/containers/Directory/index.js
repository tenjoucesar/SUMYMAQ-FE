import React, { useState } from 'react'
import StepsIndicator from 'components/StepsIndicator';
import CreateClientForm from 'components/CreateClient';
import ClientsList from 'components/ClientsList';
import { Button } from '@material-ui/core';

function Directory () {
  const [visibleClientForm, setVisibleClientForm] = useState(false);

  const displayClientContent = () => {
    if (visibleClientForm) {
      return (
        <>
          <CreateClientForm subscription={{ submitting: true, pristine: true }}/>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              onClick={() => setVisibleClientForm(false)}
            >
              Volver a la busqueda de clientes
            </Button>
        </>
      );
    }

    return (
        <>
          <ClientsList />
          <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={() => setVisibleClientForm(true)}
            >
              Crear Cliente
          </Button>
        </>
    )
  }

  return (
    <div>
      <StepsIndicator />
      {displayClientContent()}
    </div>
  );
}

export default Directory;