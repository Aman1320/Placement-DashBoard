import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
    Card,
    CardContent,
    CardHeader
  } from '@material-ui/core';


var createTable = () => {
    let images = []
    for (let i = 1; i < 190; i++) {
      images.push(<img style={{ padding: '15px'}} src={"https://www.cuchd.in/placements/logo/" + i +".jpg"} />);
      if(images=== null || ""){
        return 0;
      }
    }
    return images
  }

var image = "https://www.cuchd.in/placements/logo/1.jpg";

const DataTable = () => {
  return (
    <Card>
    <CardHeader titleTypographyProps={{variant:'h4' }} title="Companies Recruiting MNNIT Students" subheader="Top Recruiting companies "/>
    {createTable()}
    </Card>
  );
}

export default DataTable;
