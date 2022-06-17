import {createTheme} from '@mui/material'
import {COLORS} from "../constants/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.green.default,
    },
  },
})
