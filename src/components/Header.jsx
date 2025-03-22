import {
  AppBar,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Toolbar,
} from "@mui/material";
import React from "react";

const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Header({
  days,
  setDays,
  style,
  setStyle,
  type,
  setType,
  rating,
  setRating,
}) {
  const handleChangeDays = (event) => {
    const selectedDays = event.target.value;
    const selectDaysList =
      typeof selectedDays === "string" ? selectedDays.split(",") : selectedDays;
    setDays(selectDaysList);
  };

  const handleChangeStyle = (event) => {
    setStyle(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="days-label">Days</InputLabel>
            <Select
              labelId="days-label"
              id="days-select"
              value={days}
              label="Days"
              onChange={handleChangeDays}
              renderValue={(selected) => selected.join(", ")}
              multiple
              input={<OutlinedInput label="Days" />}
            >
              {allDays.map((day) => (
                <MenuItem key={day} value={day}>
                  <Checkbox checked={days.includes(day)} />
                  <ListItemText primary={day} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              id="rating-select"
              value={rating}
              label="Rating"
              onChange={handleChangeRating}
            >
              <MenuItem value={null}>Any</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
