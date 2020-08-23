import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  margin: 30px 0 30px 10px;
`;

const StyledLinkItem = styled(NavLink)`
  color: #000000;
  text-decoration: none;
`;

const LinkItem = ({linkReference, label, icon }) => (
  <StyledLinkItem to={linkReference}>
    <StyledListItem button key={label}>
      <ListItemIcon> <Icon component={icon} fontSize="large" /> </ListItemIcon>
      <ListItemText primary={label} />
    </StyledListItem>
  </StyledLinkItem>
)

export default LinkItem;