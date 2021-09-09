export const inputProps = (register, errors, label) => {
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