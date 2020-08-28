import React, { useState } from 'react'
import _isEmpty from 'lodash/isEmpty';
import CreateClientIndepentForm from 'components/CreateClientIndependtForm';
import ClientsList from 'components/ClientsList';
import { Button } from '@material-ui/core';
import { CLIENTS_API } from 'utils/api';
import Fetch from 'services/FetchService';
import CreateClientForm from 'forms/CreateClient';

function ClientQuestion () {
  const [visibleClientForm, setVisibleClientForm] = useState(false);
  const [clients, setClients] = useState([]);

  async function fetchClients() {
    const results = await Fetch.get(CLIENTS_API);
    setClients(results);
  }
  const displayClientContent = () => (
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
  )

  if (!_isEmpty(clients)) return <ClientsList clients={clients}/>;
  if (visibleClientForm) return displayClientContent();


  return (
    <div>
          <Button
            variant='contained'
            color='secondary'
            size='large' type='button' onClick={() => fetchClients()}>
           Buscar los clientes registrados
         </Button>
           <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={() => setVisibleClientForm(true)}
            >
              Crear Cliente
          </Button>
    </div>
  );
}

export default ClientQuestion;