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
import { allDays } from "../lib/constants";
import { FiltersContext } from "../hooks/FiltersProvider";

export default function DaysSelect() {
  const { days, dispatch } = React.useContext(FiltersContext);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="days-label">Days</InputLabel>
      <Select
        labelId="days-label"
        id="days-select"
        value={days}
        label="Days"
        onChange={(event) =>
          dispatch({ type: "SET_DAYS", payload: event.target.value })
        }
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
