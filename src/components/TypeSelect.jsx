import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function TypeSelect({ type, setType }) {
  const handleChangeType = (event) => {
    const newType = event.target.value;
    setType(newType);
    
    const searchParams = new URLSearchParams(window.location.search);
    if (newType === "") {
      searchParams.delete("type");
    } else {
      searchParams.set("type", newType);
    }
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="type-label">Type</InputLabel>
      <Select
        labelId="type-label"
        id="type-select"
        value={type}
        label="Type"
        onChange={handleChangeType}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="classes">classes</MenuItem>
        <MenuItem value="social">social</MenuItem>
      </Select>
    </FormControl>
  );
}
