import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function RatingSelect({ rating, setRating }) {
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="rating-label">Rating</InputLabel>
      <Select
        labelId="rating-label"
        id="rating-select"
        value={rating}
        label="Rating"
        onChange={handleChangeRating}
      >
        <MenuItem value={0}>Any</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
}
