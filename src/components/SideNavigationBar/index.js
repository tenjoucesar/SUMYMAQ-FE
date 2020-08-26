import React, { useState } from 'react';
import { List, Divider, Button } from '@material-ui/core';
import { Contacts, FindInPage, NoteAdd, PersonAdd, ExitToApp } from '@material-ui/icons';
import styled from 'styled-components';
import LinkItem from 'components/LinkItem';
import Modal from 'components/Modal';
import bgImage from 'images/sidebar.jpg';

const FullContainer = styled.div`
  height: 100vh;
  color: #ffffff;
  top: 0;
  left: 0;
  width: 260px;
  border: none;
  bottom: 0;
  z-index: 1032;
  position: relative;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px;

  hr {
    background-color: #fff;
  }

  hr:first-child {
    margin-top: 40px;
  }

  &:after {
    opacity: .8;
    background: #000;
    content: "";

  }
  :before, :after {
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    z-index: 3;
    position: absolute;
  }
`;

const SideBarContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
`;

const BG = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  position: absolute;
  transition: all 300ms linear;
  background-size: cover;
  background-position: center center;
`;

const StyledButton = styled(Button)`
  margin: 40px 20px;
`;

const SideNavigationBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <FullContainer>
      <SideBarContainer>
      <Modal open={open} handleClose={handleClose} />
      <Divider />
      <List>
        <LinkItem linkReference='/clients/create' label='Crear Cliente' icon={PersonAdd} />
        <LinkItem linkReference='/reports' label='Crear Reporte' icon={NoteAdd} />
        <LinkItem linkReference='/preliminaryInspection' label='Inspeccion Preliminar' icon={NoteAdd} />
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

  <BG style={{backgroundImage:  `url(${bgImage})`}}/>
          </FullContainer>
  )
}

export default SideNavigationBar;