import { createTheme } from '@mui/material'

export const theme = createTheme({
    components: {
        MuiTreeItem: {
            styleOverrides: {
                content: {
                    boxSizing: 'border-box',
                },
                group: {
                    marginLeft: '0'
                }
            }
        },
    }
})
