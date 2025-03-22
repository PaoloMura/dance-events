import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ paddingY: (theme) => theme.spacing(2) }}>
          <Typography variant="h1" sx={{ fontSize: "2rem" }}>
            💃 Dance events
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ paddingY: (theme) => theme.spacing(2) }} />
    </>
  );
}
