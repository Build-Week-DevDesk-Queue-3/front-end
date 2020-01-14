import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function SideBar() {
  return (
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>Home</ListItemText>
      </ListItem>
      
      <ListItem button>
        <ListItemText>User Profile</ListItemText>
      </ListItem>
      
      <ListItem button>
        <ListItemText>Tickets</ListItemText>
      </ListItem>
    </List>
  );
}

export default SideBar;