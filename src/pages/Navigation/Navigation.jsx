import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: 'rgb(15 23 42)', color: 'white' }} color="transparent" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    {user?.email && <h6 style={{ fontWeight: 500, paddingRight: '3%' }}>Logged in: {user.displayName}</h6>}
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: '500' }}>
                        Product Inventory Management
                    </Typography>
                    {
                        user?.email ?
                            <>
                                <NavLink to="/dashboard/showproduct" style={{ textDecoration: 'none' }}>
                                    <Button variant='text' color='inherit'>Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} variant='outlined' color="inherit" sx={{ m: 1 }}>Logout</Button> <AccountCircleIcon />

                            </>
                            :
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant='outlined' color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;