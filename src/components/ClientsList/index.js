import React, { useState, useRef } from 'react'
import { Avatar, Container, Typography, Card, CardContent, Paper, Button } from '@material-ui/core';
import ConfirmClientModal from './confirmModal';
import WorkIcon from '@material-ui/icons/Work';

function  ClientsList ({ clients })  {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState('');
  const nextRef = useRef(null);

  const handleOpen = (client) =>  {
    setSelectedClient(client)
    return setOpen(true);
  }

  const handleClose = () => setOpen(false);

  const confirmClient = () => {
    setOpen(false);
    localStorage.setItem('selectedClient', selectedClient);
    return nextRef.current.click();
  }

  const CardComponent = (client) => (
    <Card onClick={() => handleOpen(client)}>
      <CardContent>
        <Avatar >
          <WorkIcon />
      </Avatar>
        <Typography variant="h5" component="h2">{client.name}</Typography>
        <Typography color="textSecondary">{client.phone}</Typography>
        <Typography color="textSecondary">{client.mail}</Typography>
        <Typography color="textSecondary">{client.address}</Typography>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg">
      <Typography variant='h3'>
        Lista de Clientes
      </Typography>
      {clients.map((client) => (
        <Paper style={{ margin: 20, width: 230, display: 'inline-block' }} elevation={3} key={client._id} >
          <ConfirmClientModal open={open} client={selectedClient} confirmClient={confirmClient} handleClose={handleClose} />
          <CardComponent  {...client} />
        </Paper>
      ))}
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        style={{ display: 'none' }}
        ref={nextRef}
      >
        Next
      </Button>
    </Container>
  )
};


export default ClientsList;