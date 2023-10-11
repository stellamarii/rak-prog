import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export default function ButtonAppBar() {
    return (
        <AppBar color="secondary" position="sticky">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}>
                    Current page
                </Typography>
                <Button
                    color="inherit"
                    variant="outlined">
                    Page1
                </Button>
                <Button
                    color="inherit"
                    variant="outlined">
                    Page2
                </Button>
            </Toolbar>
        </AppBar>
    )
}
