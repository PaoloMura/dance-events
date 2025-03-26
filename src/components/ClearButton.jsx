import { Button } from "@mui/material";
import React from "react";
import { FiltersContext } from "../hooks/FiltersProvider";

export default function ClearButton() {
  const { days, rating, style, type, dispatch } =
    React.useContext(FiltersContext);

  return (
    <Button
      onClick={() => dispatch({ type: "CLEAR" })}
      disabled={!days.length && !rating && !style && !type}
      variant="contained"
      size="large"
      color="secondary"
      sx={{ m: 1, textTransform: "none" }}
    >
      Clear filters
    </Button>
  );
}
