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
        <form>
          <Typography variant='h4'>Typical Contact Form</Typography>
          <TextField label='Name' />
          <TextField label='Email' />
          <TextField label='Message' multiline />
          <Button fullWidth type='submit'>
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Home;
