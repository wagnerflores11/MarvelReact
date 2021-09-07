import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {'.'}
        <Link color="inherit" target="blank" href="https://www.linkedin.com/in/wagner-flores-9621b61b7/">
        <strong>Desenvolvido por Wagner Flores.</strong> 
        </Link>{' '}
      </Typography>
    );
  }