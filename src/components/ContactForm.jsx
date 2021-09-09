import { TextField, Typography, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { inputProps } from '../modules/adaptiveHelper';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h4'>Typical Contact Form</Typography>
      <TextField {...inputProps(register, errors, 'Name')} />
      <TextField {...inputProps(register, errors, 'Email')} />
      <TextField {...inputProps(register, errors, 'Message')} />
      <Button fullWidth type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
