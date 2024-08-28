import { AppBar, Box, Toolbar } from "@mui/material"

import {theme} from '../context/themeContext';

export const MainAppBar = ()=> {
    return <AppBar sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar variant="dense">
            <Toolbar sx={{ justifyContent: 'right', flex:'auto' }}>
                <Box component="img" src="/src/assets/logo.png" alt="Logo" sx={{ height: 50 }} />
            </Toolbar>
        </Toolbar>
    </AppBar>
}