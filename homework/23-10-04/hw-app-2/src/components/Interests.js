import { Box, Grid } from "@mui/material";
import React from "react";

export default function Interests() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <p>xs=8</p>
            </Grid>
            <Grid item xs={4}>
                <p>xs=4</p>
            </Grid>
            <Grid item xs={4}>
                <p>xs=4</p>
            </Grid>
            <Grid item xs={8}>
                <p>xs=8</p>
            </Grid>
        </Grid>
        </Box>
    );
}
