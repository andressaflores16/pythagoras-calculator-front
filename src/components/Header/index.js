import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Header() {
    return (
        <section>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" color="inherit">
                        Pythagoras Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
        </section>
    );
}

export default Header;