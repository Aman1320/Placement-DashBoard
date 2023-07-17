import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Box, Typography,  makeStyles, Menu, MenuItem  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InstagramIcon from '@material-ui/icons/Instagram';
import uimage from '../../../assets/images/users/new_img.jfif';
import bgprofile from '../../../assets/images/backgrounds/chandigarh.jpg';

const userProfile = {
    avatar: uimage,
    jobTitle: 'Simplifying numbers',
    name: 'Sources',
    href:"/profile"
};


const useStyles = makeStyles((theme) => ({

    profileBg: {
        backgroundImage: `url(${bgprofile})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    profileTextBg: {
        cursor:'pointer',
        backgroundColor: 'rgba(0, 0, 0,0.5)',
        padding:'5px 10px',
        display: 'flex'
    },
    pwidth: {
        width: 200
    }
}));

const Profile = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <Box className={classes.profileBg} color="white">
                <Box p={5}>
                    
                </Box>
                <Typography  variant="h6"  className={classes.profileTextBg} onClick={handleClick}>
                    {userProfile.name}
                    <Box flexGrow={1}  />
                    <ExpandMoreIcon  fontSize="small"/>
                </Typography>
                <Menu

                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}

                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>https://tpo.mnnit.ac.in/</MenuItem>
                    <MenuItem onClick={handleClose}>https://reactjs.org/</MenuItem>
                </Menu>
            </Box>
     );
}

export default Profile;
