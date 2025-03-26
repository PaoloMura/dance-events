import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { FiltersContext } from "../hooks/FiltersProvider";

export default function TypeSelect() {
  const { type, dispatch } = React.useContext(FiltersContext);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="type-label">Type</InputLabel>
      <Select
        labelId="type-label"
        id="type-select"
        value={type}
        label="Type"
        onChange={(event) =>
          dispatch({ type: "SET_TYPE", payload: event.target.value })
        }
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="classes">classes</MenuItem>
        <MenuItem value="social">social</MenuItem>
      </Select>
    </FormControl>
  );
}
