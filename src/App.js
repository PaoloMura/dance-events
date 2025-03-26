import { ThemeProvider } from "@mui/material";
import EventList from "./components/EventList";
import Header from "./components/Header";
import React from "react";
import { theme } from "./lib/theme";
import { FiltersProvider } from "./hooks/FiltersProvider";
import { filtersReducer } from "./lib/filtersReducer";
import { initialiseFilters } from "./lib/initialiseFilters";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const [filters, dispatch] = React.useReducer(
    filtersReducer,
    searchParams,
    initialiseFilters
  );

  return (
    <ThemeProvider theme={theme}>
      <FiltersProvider filters={filters} dispatch={dispatch}>
        <Header />
        <EventList />
      </FiltersProvider>
    </ThemeProvider>
  );
}

export default App;
