import React from 'react';
import {List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {Contacts, FindInPage, NoteAdd, PersonAdd } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 100px;
  height: 100vh;
  width: 260px;
`;

const StyledListItem = styled(ListItem)`
  margin: 30px 0 30px 10px;
`;

const StyledLinkItem = styled(NavLink)`
  color: #000000;
  text-decoration: none;
`;

const SideNavigationBar = () => (
  <SideBarContainer>
    <Divider />
    <List>
      <StyledLinkItem to='/clients'>
        <StyledListItem button key='Crear Cliente'>
          <ListItemIcon> <PersonAdd fontSize="large" /> </ListItemIcon>
          <ListItemText primary='Crear Cliente' />
        </StyledListItem>
      </StyledLinkItem>
      <StyledLinkItem to='/reports'>
        <StyledListItem button key='Crear Reporte'>
          <ListItemIcon> <NoteAdd fontSize="large" /> </ListItemIcon>
          <ListItemText primary='Crear Reporte' />
        </StyledListItem>
      </StyledLinkItem>
      <StyledLinkItem to='/proforma'>
        <StyledListItem button key='Crear Proforma'>
          <ListItemIcon> <NoteAdd fontSize="large" /> </ListItemIcon>
          <ListItemText primary='Crear Proforma' />
        </StyledListItem>
      </StyledLinkItem>
    </List>
    <Divider />
    <List>
      <StyledListItem button key='Buscar Cliente'>
        <ListItemIcon> <Contacts fontSize="large" /> </ListItemIcon>
        <ListItemText primary='Buscar Cliente' />
      </StyledListItem>

      <StyledListItem button key='Buscar Reporte'>
        <ListItemIcon> <FindInPage fontSize="large" /> </ListItemIcon>
        <ListItemText primary='Buscar Reporte' />
      </StyledListItem>

      <StyledListItem button key='Buscar Proforma'>
        <ListItemIcon> <FindInPage fontSize="large" /> </ListItemIcon>
        <ListItemText primary='Buscar Proforma' />
      </StyledListItem>
    </List>
  </SideBarContainer>
);

export default SideNavigationBar;