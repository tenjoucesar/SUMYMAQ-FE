import React, { useState } from 'react'
import styled  from 'styled-components';
import _isEmpty from 'lodash/isEmpty';
import ClientsList from 'components/ClientsList';
import Fetch from 'services/FetchService';
import CreateClientForm from 'forms/CreateClient';
import BoxContainer from 'sharedComponents/BoxContainer';
import { Button, Paper, Container } from '@material-ui/core';
import { CLIENTS_API } from 'utils/api';
import { FormContainer } from 'sharedComponents/Containers';
import CreateClientIndepentForm from 'components/CreateClientIndependtForm';

const StyledContainer = styled(Container)`
  display: flex;
  height: 200px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function ClientQuestion (props) {
  const [visibleClientForm, setVisibleClientForm] = useState(false);
  const [visibleClientList, setVisibleClientList] = useState(false);
  const [clients, setClients] = useState([]);

  async function fetchClients() {
    if (_isEmpty(clients)) {
      const results = await Fetch.get(CLIENTS_API);
      setClients(results);
    }
    setVisibleClientList(true);
  }

  const BackToMenuButton = () => (
    <>
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
  const DisplayClientContent = () => (
      <div style={{margin: 'auto'}}>
        <CreateClientIndepentForm subscription={{ submitting: true, pristine: true }}/>
        <BackToMenuButton />
      </div>
  )

  const ClientsListContent = () => (
    <FormContainer>
      <ClientsList clients={clients} selectClients={props.selectClients}/>
      <Button
        variant='contained'
        color='secondary'
        size='large'
        onClick={() => setVisibleClientList(false)}
      >
        Volver a la busqueda de clientes
      </Button>
    </FormContainer>
  )

  if (visibleClientList) return <ClientsListContent />;
  if (visibleClientForm) return <DisplayClientContent />;


  return (
        <BoxContainer title='Crear o elige un cliente existente'>
            <StyledContainer>
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
            </StyledContainer>
        </BoxContainer>
  );
}

export default ClientQuestion;
