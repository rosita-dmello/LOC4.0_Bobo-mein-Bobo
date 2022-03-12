import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link href="https://google.com/">
        Bobo Mein Bobo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        
        alignText: "center"
      }}
    >
    
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 'auto',
          backgroundColor: (theme) =>
           theme.palette.grey[200]
             
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Made with ❤ by Urmi, Rosita, Pratham, Harsh
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}