export const controlProps = (register, errors, label) => {
  let name = label.toLowerCase();
  return {
    label: label,
    inputProps: {
      ...register(name),
    },
    error: errors[name],
    helperText: errors[name]?.message,
  };
};