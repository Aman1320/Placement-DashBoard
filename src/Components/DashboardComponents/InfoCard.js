import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

const InfoCards = (props) => {
  return (
    <Card style={{marginBottom: '10px'}}>
      <CardContent>
        <Grid container justify="space-between" alignItems="center" spacing={3}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {props.heading}
              {props.for}
            </Typography>
            <Typography
              color="textPrimary"
              style = {{fontWeight: "bold"}}
              variant="h2"
            >
              {props.cost}

            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InfoCards;
