import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
   
    toolbar: {
      paddingRight: 24, 
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    fixedHeight: {
      height: 240,
    }
}));

export default function MenuAdmin({title}){
    const classes = useStyles();
   
    return(
    <div>      
      <AppBar position="absolute">
          <Toolbar className={classes.toolbar}>              
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              {title}
          </Typography>      
          </Toolbar>
      </AppBar>    
    </div>
  )
}