import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function RatingSelect({ rating, setRating }) {
  const handleChangeRating = (event) => {
    const newRating = event.target.value;
    setRating(newRating);

    const searchParams = new URLSearchParams(window.location.search);
    if (newRating === "") {
      searchParams.delete("rating");
    } else {
      searchParams.set("rating", newRating);
    }
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
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
        <MenuItem value={""}>Any</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
}
