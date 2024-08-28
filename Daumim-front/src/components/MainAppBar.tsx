import { AppBar, Box, Toolbar } from "@mui/material"


export const MainAppBar = ()=> {
    return <AppBar sx={{ backgroundColor: '#5296a5' }}>
        <Toolbar variant="dense">
            <Toolbar sx={{ justifyContent: 'right', flex:'auto' }}>
                <Box component="img" src="/src/assets/logo.png" alt="Logo" sx={{ height: 50 }} />
            </Toolbar>
        </Toolbar>
    </AppBar>
}