import React from 'react';
import { List, Divider } from '@material-ui/core';
import { Contacts, FindInPage, NoteAdd, PersonAdd } from '@material-ui/icons';
import styled from 'styled-components';
import LinkItem from 'components/LinkItem';

const SideBarContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 100px;
  height: 100vh;r
  width: 260px;
`;

const SideNavigationBar = () => (
  <SideBarContainer>
    <Divider />
    <List>
      <LinkItem linkReference='/clients' label='Crear Cliente' icon={PersonAdd}/>
      <LinkItem linkReference='/reports' label='Crear Reporte' icon={NoteAdd}/>
      <LinkItem linkReference='/proforma' label='Crear Proforma' icon={NoteAdd}/>
    </List>
    <Divider />
    <List>
      <LinkItem linkReference='/clients' label='Buscar Cliente' icon={Contacts}/>
      <LinkItem linkReference='/reports' label='Buscar Reporte' icon={FindInPage}/>
      <LinkItem linkReference='/proforma' label='Buscar Proforma' icon={FindInPage}/>
    </List>
  </SideBarContainer>
);

export default SideNavigationBar;