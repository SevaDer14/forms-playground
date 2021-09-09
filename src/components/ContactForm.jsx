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

  const formControlProps = (label) => {
    let name = label.toLowerCase();
    return {
      label: label,
      inputProps: {
        ...register(name, { required: `Please enter the ${name}.` }),
      },
      error: errors[name],
      helperText: errors[name]?.message,
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h4'>Typical Contact Form</Typography>
      <TextField {...formControlProps('Name')} />
      <TextField {...formControlProps('Email')} />
      <TextField {...formControlProps('Message')} />
      <Button fullWidth type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
