import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Contacts, FindInPage, NoteAdd, PersonAdd } from '@material-ui/icons';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  margin: 30px 0 30px 10px;
`;

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <StyledListItem button key='Crear Cliente'>
            <ListItemIcon> <PersonAdd /> </ListItemIcon>
            <ListItemText primary='Crear Cliente' />
          </StyledListItem>
          <StyledListItem button key='Crear Reporte'>
            <ListItemIcon> <NoteAdd /> </ListItemIcon>
            <ListItemText primary='Crear Reporte' />
          </StyledListItem>
        </List>
        <Divider />
        <List>
        <StyledListItem button key='Buscar Cliente'>
            <ListItemIcon> <Contacts /> </ListItemIcon>
            <ListItemText primary='Buscar Cliente' />
          </StyledListItem>

          <StyledListItem button key='Buscar Reporte'>
            <ListItemIcon> <FindInPage /> </ListItemIcon>
            <ListItemText primary='Buscar Reporte' />
          </StyledListItem>
        </List>
      </Drawer>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
      </main> */}
    </div>
  );
}