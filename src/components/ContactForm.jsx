import { TextField, Typography, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { controlProps } from '../modules/adaptiveHelper';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ContactForm = () => {
  const shape = {
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  };
  const schema = yup.object().shape(shape);
  const labels = Object.keys(shape);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h4'>Typical Contact Form</Typography>
      <TextField {...controlProps(register, errors, labels[0])} />
      <TextField {...controlProps(register, errors, labels[1])} />
      <TextField
        {...controlProps(register, errors, labels[2])}
        multiline
        minRows={4}
      />
      <Button fullWidth type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
