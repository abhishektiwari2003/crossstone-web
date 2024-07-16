import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    styled,
    ListItemButton,
    Typography,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link, Navigate } from 'react-router-dom';
import crossstone2 from '../assets/crossstone2.svg';

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];

const Navbar = () => {
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'white', 
            paddingLeft: {sm : 2, md : 16},
            paddingRight: {md: 16, sm: 'none'},
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Box
                    component="img"
                    src={crossstone2}
                    alt="Crossstone Logo"
                    width={75}
                    height={45}
                    onClick={'/'}
                />
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: 'black',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: 'black',
                                    }
                                }}
                                >
                                    <Typography sx={{color: '#F42A40', fontWeight: 'bold', fontSize: 18}}>
                                        {text}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
