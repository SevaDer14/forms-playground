import { useEffect } from 'react';
import Head from 'next/head';
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <Container maxWidth='sm' style={{ paddingTop: '15%' }}>
        <Grid container direction='column' spacing={3}>
          <Grid item>
            <Typography variant='h4'>Typical Contact Form</Typography>
          </Grid>
          <Grid item>
            <TextField variant='outlined' fullWidth label='Name' />
          </Grid>
          <Grid item>
            <TextField variant='outlined' fullWidth label='Email' />
          </Grid>
          <Grid item>
            <TextField
              variant='outlined'
              fullWidth
              label='Message'
              multiline
              minRows={4}
            />
          </Grid>
          <Grid item>
            <Button variant='contained' size='large' fullWidth color='primary'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
