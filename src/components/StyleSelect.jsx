import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { FiltersContext } from "../hooks/FiltersProvider";

export default function StyleSelect() {
  const { style, dispatch } = React.useContext(FiltersContext);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="style-label">Style</InputLabel>
      <Select
        labelId="style-label"
        id="style-select"
        value={style}
        label="Style"
        onChange={(event) =>
          dispatch({ type: "SET_STYLE", payload: event.target.value })
        }
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="salsa">Salsa</MenuItem>
        <MenuItem value="bachata">Bachata</MenuItem>
        <MenuItem value="kizomba">Kizomba</MenuItem>
      </Select>
    </FormControl>
  );
}
