import React from 'react';
import Chart from "react-apexcharts";

const MncOffering = () => {
    const options_mnc = {
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
      const series_mnc = [
        {
          name: "Above 15 LACS",
          data: [4, 15, 17, 18, 46],
        },
        {
          name: "Above 10-15 LACS",
          data: [5, 5, 18, 18, 43],
        },
      ];

    return (
        <div>
            <Chart
              options={options_mnc}
              series={series_mnc}
              type="bar"
              height="308px"
            />
        </div>
    );
}

export default MncOffering;
