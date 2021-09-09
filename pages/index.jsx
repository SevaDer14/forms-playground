import Head from 'next/head';
import { Container } from '@material-ui/core';
import ContactForm from '../src/components/ContactForm'
const Home = () => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <Container maxWidth='sm' style={{ paddingTop: '15%' }}>
        <ContactForm/>
      </Container>
    </>
  );
};

export default Home;
