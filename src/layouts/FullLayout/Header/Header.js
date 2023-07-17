import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box,  Hidden, IconButton, Toolbar, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {},
    Logo: {
        display: 'flex',
        alignItems: 'center',
        color:'#fff',
    },
    logoText:{
       minWidth:200,
       display:'flex'
    },
    menuButton: {
        marginLeft:theme.spacing(1),
        marginRight:theme.spacing(1),
    },
    button:{
        color:'white'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
            {/* ------------ Menu icon ------------- */}
            <Hidden mdDown>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.toggleSidebar}>
                    <MenuIcon />
                </IconButton>
            </Hidden>

            <Hidden lgUp>
                <IconButton color="inherit" aria-label="menu" onClick={props.toggleMobileSidebar}>
                    <MenuIcon />
                </IconButton>
            </Hidden>
            {/* ------------ End Menu icon ------------- */}

                {/* ------------ Logo ------------- */}
                <Link to="/" className={classes.Logo}>
                    <h2>Placement Dashboard </h2>
                </Link>
                {/* ------------ End Logo ------------- */}



                <Box flexGrow={1} />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
