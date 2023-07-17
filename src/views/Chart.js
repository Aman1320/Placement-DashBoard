import React from 'react';
import Chart from "react-apexcharts";
import InfoCards from '../Components/DashboardComponents/InfoCard';

import {
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';

const ChartPage = () => {

  const optionssalesoverview = {
    grid: {
      show: true,
      borderColor: "rgba(0,0,0,.08)",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        endingShape: "flat",
      },
    },

    colors: ["#0b70fb", "#6ac3fd"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      type:"area",
      stacked:true,
      toolbar: {
        show: false,
      },
      fontFamily: 'poppins',
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: true,
    },
    xaxis: {
      type: "category",
      categories: ["2016", "2017", "2018", "2019", "2020"],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: 'butt',
      colors: ['transparent']
    },
    tooltip: {
      theme: "dark",
    },
  };

  // var highest_pacakge_offered = [6.1, 6.75, 6.4, 16.0, 24.0, 23.65, 22.5, 31.77, 31.77, 35, 35]
  // var above_5to6= [1,2,4,7,12,12,17,17,55,55,165]
  // var above_7to10 = [0,0,2,2,3,6,7,7,34,34,82]
  // var above_10to15 = [0, 0, 2,2,2,5,5,5,18,18,43]
  // var above_15  = [0,0,1,2,2,3,4,15,17,18,46]
  // var student_placed = [937, 1404, 1984, 1752, 2410, 4690, 4690, 5134, 6314, 6617, 3100];


  const seriessalesoverview = [{
      name: "Above 15-20 LACS",
      data: [7, 7, 34, 34, 82],
    },
    {
      name: "Above 10-15 LACS",
      data: [17, 17, 55, 55, 165],
    },
  ];


  const optionlinechart = {
    grid: {
      show: true,
      borderColor: "rgba(0,0,0,.08)",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: 'area',
        fontFamily: 'poppins',
        zoom: {
          enabled: false
        }
      },
      colors: ["#0b70fb", "#6ac3fd"],
      stroke: {
        curve: 'straight'
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      legend: {
        show: true,
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      },
      tooltip: {
        theme: "dark",
      },
    };

var highest_pacakge_offered = [6.1, 6.75, 6.4, 16.0, 24.0, 23.65, 22.5, 31.77, 31.77, 35, 35];


// student_placed  = [ ...student_placed, 7000 ];

const serieslinechart = [{
  name: "Highest package offered",
  data: highest_pacakge_offered
}];


return (
  <div >


  <Grid container spacing={3}>

  <Grid item lg={8} md={12} xs={12}>
  <Card elevation = {1}>
    <CardHeader titleTypographyProps = {{variant: 'h4'}}
    title = "Highest Pacakage Offered"
    subheader = "2010-2021" / >
    <CardContent >
      <Chart options = {optionlinechart} series = {serieslinechart} type="area" height = "308px" />
    </CardContent>
  </Card>
  </Grid>

  <Grid item lg={4} md={12} xs={12}>
      <InfoCards heading="Computer Science and IT branches" cost ="35 LPA" />
      <InfoCards heading="Mechanical,Mechatronics,Aerospace & Automobile " cost="9 LPA" />
      <InfoCards heading="Civil Engineering, Petroleum and Chemical " cost="15 LPA" />
      <InfoCards heading="Electrical and Electronics & Communication" cost="10 LPA" />
  </Grid>


  <Grid item lg={12} md={12} xs={12}>
  <Card elevation = {1} >
    <CardHeader titleTypographyProps = {{variant: 'h4'}}
    title = "MNC's Offering"
    subheader = "Below 15 LACS" / >
    <CardContent >
      <Chart options = {optionssalesoverview} series = {seriessalesoverview } type = "area" height = "308px" />
    </CardContent>
  </Card>
  </Grid>




  </Grid>



  </div>
);
}

export default ChartPage;
