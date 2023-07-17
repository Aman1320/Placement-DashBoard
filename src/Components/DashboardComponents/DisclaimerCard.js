import React from 'react';
  import {
    Card,
    CardContent,
    Typography,
    makeStyles,
  } from '@material-ui/core';
 const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    }
  });
const InfoCards = (props) => {
    return (
        <Card >
            <CardContent>
            <Typography
                variant={"h4"}
                gutterBottom
            >
                {props.title}
            </Typography>
            <Typography

                variant={"caption"}
            >
            This project is made for my college project submission and the data is as per official website of MNNIT Allahabad. I cannot accept responsibility for the consequences of its use for other purposes or in other contexts.
            Leave your valuable Feedback :  <a rel="noreferrer" target="_blank" href="https://amansaini.tech/#feedback">Click Here</a>

            </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoCards;
