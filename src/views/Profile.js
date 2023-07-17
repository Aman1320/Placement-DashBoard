import React, {useState} from 'react';
import {
    Grid,
    Card,
    CardContent,
    CardHeader,
    makeStyles,
    Typography,
    Avatar,
    Divider,
    Box,
    Button,
    TextField
  }
from '@material-ui/core';
import profileimg from '../assets/images/users/new_img.jfif'
const useStyles = makeStyles({
    avatar: {
        height:100,
        width:100,
        margin:'0 auto',
        marginBottom:10
    }
  })

  const ProfilePage = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        firstName: 'Aman',
        lastName: 'Saini',
        email: 'aman1320saini@gmail.com',
        state: 'Uttarakhand',
        country: 'India'
      });

      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    return (
        <Grid container spacing={3}>
            <Grid item lg={3} md={12} xs={12}>
                <Card elevation={1} >
                    <CardContent>
                        <Box textAlign="center">
                            <Avatar alt="aman" className={classes.avatar} src={profileimg} />
                            <Typography variant="h4">Aman Saini</Typography>
                            <Typography variant="body2">Web Developer</Typography>
                        </Box>
                    </CardContent>
                    <Divider light/>
                    <CardContent>
                        <Button fullWidth size="large" variant="outlined"  color="secondary">Contact me</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={9} md={12} xs={12}>
                <Card elevation={1}>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="Why this Project ?" subheader="About the dev"/>
                    <CardContent>
                  <Typography variant="body2">This webpage Still in under Progress to add more functionality. Meanwhile you can visit my personal website(Click on My Portfolio residing in sidebar)</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ProfilePage;
