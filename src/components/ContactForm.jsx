import { TextField, Typography, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  const nameProps = {
    label: 'Name',
    inputProps: {
      ...register('name', { required: 'Please enter the name.' }),
    },
    error: errors.name,
    helperText: errors.name?.message,
    autoFocus: true,
  };

  const emailProps = {
    label: 'Email',
  };

  const messageProps = {
    label: 'Message',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h4'>Typical Contact Form</Typography>
      <TextField {...nameProps} />
      <TextField {...emailProps} />
      <TextField {...messageProps} />
      <Button fullWidth type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
