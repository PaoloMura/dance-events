import { AppBar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <AppBar sx={{ padding: (theme) => theme.spacing(2) }}>
      <Typography variant="h1" sx={{ fontSize: "3rem" }}>
        💃 Dance events
      </Typography>
    </AppBar>
  );
}
