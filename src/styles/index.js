import { createMuiTheme } from '@material-ui/core/styles';
import { TextField, withStyles } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' }, 
    secondary: { main: '#FFFFFF' },
  },

}) 

export const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '& input': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      },
    },
  },
})(TextField);