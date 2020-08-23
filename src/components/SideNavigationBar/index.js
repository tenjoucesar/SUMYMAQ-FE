import React, { useState } from 'react';
import { List, Divider, Button } from '@material-ui/core';
import { Contacts, FindInPage, NoteAdd, PersonAdd, ExitToApp } from '@material-ui/icons';
import styled from 'styled-components';
import LinkItem from 'components/LinkItem';
import Modal from 'components/Modal';

const SideBarContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 100px;
  height: 100vh;
  width: 260px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin: 40px 20px;
`;

const SideNavigationBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SideBarContainer>
      <Modal open={open} handleClose={handleClose} />
      <Divider />
      <List>
        <LinkItem linkReference='/clients' label='Crear Cliente' icon={PersonAdd} />
        <LinkItem linkReference='/reports' label='Crear Reporte' icon={NoteAdd} />
        <LinkItem linkReference='/proforma' label='Crear Proforma' icon={NoteAdd} />
      </List>
      <Divider />
      <List>
        <LinkItem linkReference='/clients' label='Buscar Cliente' icon={Contacts} />
        <LinkItem linkReference='/first' label='Buscar Reporte' icon={FindInPage} />
        <LinkItem linkReference='/second' label='Buscar Proforma' icon={FindInPage} />
      </List>
        <StyledButton
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<ExitToApp/>}
          type="submit"
          onClick={handleOpen}
        >
          Desconectarme
        </StyledButton>
    </SideBarContainer>
  )
}

export default SideNavigationBar;