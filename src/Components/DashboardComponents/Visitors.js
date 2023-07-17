import React from 'react';
import Chart from "react-apexcharts";

const Visitors = () => {
    const optionsvisitors = {
        labels: ["Computer Science", "Mechanical", "Civil Engineering", "Electrical and Electronics"],
        dataLabels: {
          enabled: false,
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
          },
          borderColor: "transparent",
        },
        chart: {
            fontFamily: 'poppins',
        },
        plotOptions: {
          pie: {
            donut: {
              size: "85px",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "18px",
                  color: undefined,
                  offsetY: -10,
                },
                value: {
                  show: true,
                  color: "#99abb4",
                },
                total: {
                  show: true,
                  label: "Visited",
                  color: "#99abb4",
                },
              },
            },
          },
        },
        stroke: {
          width: 1,
          colors: "transparent",
        },
        legend: {
          show: true,
          position: 'bottom',
        },
        colors: ["#0b70fb", "#6ac3fd", "#eceff1", "#745af2"],
        tooltip: {
          fillSeriesColor: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 250,
              },
            },
          },
        ],
      };
      const seriesvisitors = [122, 115, 35,37];
    return (
        <div>
            <Chart
                options={optionsvisitors}
                series={seriesvisitors}
                type="donut"
                height="353px"
                />
        </div>
    );
}

export default Visitors;
