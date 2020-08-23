import React, { useEffect, useState } from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, List, Typography } from '@material-ui/core';
import { CLIENTS_API } from 'utils/api';
import WorkIcon from '@material-ui/icons/Work';
import Fetch from 'services/FetchService';

function ClientsList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      const results = await Fetch.get(CLIENTS_API);
      setClients(results);
    }
    fetchClients();
  }, [])

  const displayClients = () => clients.map((client) => (
    <ListItem key={client._id}>
      <ListItemAvatar >
        <Avatar >
          <WorkIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={client.name} />
    </ListItem>
  ));

  return (
    <>
      <Typography variant='h3'>
        Busca el cliente aca
      </Typography>
      <List>
        {!!clients.length && displayClients()}
      </List>
    </>
  );
}


export default ClientsList;