import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function StyleSelect({ style, setStyle }) {
  const handleChangeStyle = (event) => {
    setStyle(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="style-label">Style</InputLabel>
      <Select
        labelId="style-label"
        id="style-select"
        value={style}
        label="Style"
        onChange={handleChangeStyle}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="salsa">Salsa</MenuItem>
        <MenuItem value="bachata">Bachata</MenuItem>
        <MenuItem value="kizomba">Kizomba</MenuItem>
      </Select>
    </FormControl>
  );
}
