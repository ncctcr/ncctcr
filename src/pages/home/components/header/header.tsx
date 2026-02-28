import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import Time from "../time/time";

const Header = () => {

    return (
        <AppBar position="sticky" color="transparent" elevation={0}>
            <Toolbar disableGutters>
                <Typography variant="h1" component="div" sx={{
                    flexGrow: 1,
                    fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem' }
                }}>
                    Mykola Nesterchuk
                    <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                        {' | React Developer'}
                    </Box>
                </Typography>
                <Time />
            </Toolbar>
        </AppBar>
    );
};

export default Header;