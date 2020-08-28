import React from 'react'
import { Avatar, Container, Typography, Card, CardContent, Paper } from '@material-ui/core';

import WorkIcon from '@material-ui/icons/Work';

const ClientsList = ({ clients }) => (
  <Container maxWidth="lg">
    <Typography variant='h3'>
      Lista de Clientes
      </Typography>
    {clients.map((client) => (
      <Paper style={{ margin: 20, width: 230, display: 'inline-block' }} elevation={3} key={client._id} >
        <Card >
          <CardContent>
            <Avatar >
              <WorkIcon />
              )
          </Avatar>
            <Typography variant="h5" component="h2">{client.name}</Typography>
          </CardContent>
        </Card>
      </Paper>
    ))}
  </Container>
);


export default ClientsList;