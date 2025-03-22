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

export default function Header({ days, setDays }) {
  const handleChangeDays = (event) => {
    const selectedDays = event.target.value;
    const selectDaysList =
      typeof selectedDays === "string" ? selectedDays.split(",") : selectedDays;
    setDays(selectDaysList);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <FormControl sx={{ m: 1, minWidth: 120, zIndex: 100 }}>
            <InputLabel id="days-label">Days</InputLabel>
            <Select
              labelId="days-label"
              id="days-label"
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
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
