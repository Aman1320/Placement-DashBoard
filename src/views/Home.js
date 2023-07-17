import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    CardHeader,
  } from '@material-ui/core';
import MncOffering from  '../Components/DashboardComponents/MncOffering'
import Visitors from  '../Components/DashboardComponents/Visitors'
import InfoCards from '../Components/DashboardComponents/InfoCard';
import LineChart from './LineChart'
import DisclaimerCard from '../Components/DashboardComponents/DisclaimerCard';



const Home = () => {
    return (
        <Grid container spacing={3}>

            <Grid item lg={8} md={12} xs={12}>
                <Card elevation={1}>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="MNC's Offering" subheader="Above 15 LACS"/>
                    <CardContent>
                        <MncOffering/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item lg={4} md={12} xs={12}>
                <Card>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="Total Companies" subheader="Engineering"/>
                    <CardContent>
                        <Visitors/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item lg={3} md={12} xs={12}>
                <InfoCards heading="Students selected in Computer Science and IT branches" cost ={"350"} />
                <InfoCards heading="Mechanical,Production and Industrial  students selected " cost={"190"} />
                <InfoCards heading="M.Tech and MBA students selected" cost={"208"} />
                <InfoCards heading="Electrical and Electronics & Communication students selected" cost={"150"} />
            </Grid>

            <Grid item lg={9} md={12} xs={12}>
                <LineChart/>
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
                <DisclaimerCard title="Disclaimer"/>
            </Grid>
        </Grid>

    );
}

export default Home;
