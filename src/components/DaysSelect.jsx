import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

export const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function DaysSelect({ days, setDays }) {
  const handleChangeDays = (event) => {
    const selectedDays = event.target.value;
    const selectedDaysList =
      typeof selectedDays === "string" ? selectedDays.split(",") : selectedDays;
    setDays(selectedDaysList);

    const searchParams = new URLSearchParams(window.location.search);
    if (selectedDaysList.length > 0) {
      searchParams.set("days", selectedDaysList.join(","));
    } else {
      searchParams.delete("days");
    }
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
  };

  return (
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
  );
}
