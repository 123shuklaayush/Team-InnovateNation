import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const linkStyle = {
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4" sx={{ fontSize: '1.5rem' }}>
        Add New Case
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Last added 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault} style={linkStyle}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
