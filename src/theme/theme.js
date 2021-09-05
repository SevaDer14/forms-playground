import { createTheme } from '@material-ui/core';

const theme = createTheme({
  overrides: {
    MuiTextField: {
      root: {
        margin: '1rem 0',
      },
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
      minRows: 4
    },
    MuiButton: {
      variant: 'contained',
      size: 'large',
      color: 'primary'
    }
  },
});

export default theme;
