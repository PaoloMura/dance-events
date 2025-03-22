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
              <MenuItem value="Salsa">Salsa</MenuItem>
              <MenuItem value="Bachata">Bachata</MenuItem>
              <MenuItem value="Kizomba">Kizomba</MenuItem>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
