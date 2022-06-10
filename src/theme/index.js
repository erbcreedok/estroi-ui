import { createTheme } from '@mui/material'
import {COLORS} from "../constants/colors";

export const theme = createTheme({
    components: {
        MuiTreeItem: {
            styleOverrides: {
                content: {
                    boxSizing: 'border-box',
                    ['&.Mui-selected']: {
                        backgroundColor: COLORS.blue.light,
                    },
                    ['&.Mui-selected:hover']: {
                        backgroundColor: COLORS.blue.default,
                    },
                },
                group: {
                    marginLeft: '0'
                }
            }
        },
    }
})
