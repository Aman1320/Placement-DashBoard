import React from 'react';
import Chart from "react-apexcharts";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';

const ChartPage = () => {
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
        type: 'line',
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
        categories: [ "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018","2019", "2020", "2021"],
      },
      tooltip: {
        theme: "dark",
      },
    };

var student_placed = [937, 1404, 1984, 1752, 2410, 4690, 4690, 5134, 6314, 6617, 7412];

var companies_visited = [104, 127, 163, 214, 282, 425, 425, 492, 627, 691, 627];

// student_placed  = [ ...student_placed, 7000 ];

const serieslinechart = [{
  name: "Student placed",
  data: student_placed
},
{
  name: "Companies visited",
  data: companies_visited
}];



return (
  <div >
  <Card elevation = {1}>
    <CardHeader titleTypographyProps = {{variant: 'h4'}}
    title = "Student Placed vs Companies Visited"
    subheader = "2011-2021" / >
    <CardContent >
      <Chart options = {optionlinechart} series = {serieslinechart} type="area" height = "391.5px" />
    </CardContent>
  </Card>

  </div>
);
}

export default ChartPage;
