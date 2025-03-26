import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function StyleSelect({ style, setStyle }) {
  const handleChangeStyle = (event) => {
    const newStyle = event.target.value;
    setStyle(newStyle);

    const searchParams = new URLSearchParams(window.location.search);
    if (newStyle === "") {
      searchParams.delete("style");
    } else {
      searchParams.set("style", newStyle);
    }
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
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
