import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    opacity: '50%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function ResponsiveDrawer({onSelectFlux}) {
  // const { window } = props;
  const classes = useStyles();
  const channels = require('../tv.json');
  
navigator.mediaDevices.enumerateDevices()
.then((data) => {
  console.log('data', data);
})
.catch((err) => {
  console.log('error getting MediaDeviceInfo list', err);
});

    const drawer = (
      <div>
        <Divider />
        <List>
        { Object.entries(channels).map(([key,{name, number, url, logo}]) => 
          <ListItem button key={key}>
            <ListItem
              button
              onClick={()=> {onSelectFlux(url)}}>
                <ListItemIcon><img src={logo} alt="Logo" height="50" width="50" crop="fill" radius="20"/></ListItemIcon>
            <ListItemText primary={number}/>{name}
            </ListItem>
        </ListItem>) }          
        </List>
        <Divider />
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
          <nav className={classes.drawer}>

             <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>

        </nav>
      </div>
    );
  }

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


