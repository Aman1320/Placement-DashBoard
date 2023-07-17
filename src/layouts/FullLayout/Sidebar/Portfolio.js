import React from 'react';
import { Box, Button } from '@material-ui/core';

const Portfolio = () => {
    return (
        <Box p={2} m={2} bgcolor="background.dark">

            <Box
            display="flex"
            justifyContent="center"
            mt={2}
            >
            <Button
                color="primary"
                component="a"
                target="_blank"
                href="https://amansaini.tech/"
                disableElevation
                variant="contained"
            >
                My portfolio
            </Button>
            </Box>
        </Box>
    );
}

export default Portfolio;
