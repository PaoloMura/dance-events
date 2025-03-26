import { ThemeProvider } from "@mui/material";
import EventList from "./components/EventList";
import Header from "./components/Header";
import React from "react";
import { theme } from "./lib/theme";
import { allDays } from "./components/DaysSelect";

function getInitialDays(searchParams) {
  const days =
    searchParams
      .get("days")
      ?.split(",")
      ?.filter((day) => allDays.includes(day)) || [];

  return [...new Set(days)];
}

function getInitialStyle(searchParams) {
  const style = searchParams.get("style") || "";
  if (["bachata", "salsa", "kizomba"].includes(style)) {
    return style;
  }

  return "";
}

function getInitialType(searchParams) {
  const type = searchParams.get("type") || "";
  if (["classes", "social"].includes(type)) {
    return type;
  }

  return "";
}

function getInitialRating(searchParams) {
  const rating = searchParams.get("rating") || "";
  if (["1", "2", "3", "4", "5"].includes(rating)) {
    return rating;
  }

  return "";
}

function App() {
  const searchParams = new URLSearchParams(window.location.search);

  const [days, setDays] = React.useState(() => getInitialDays(searchParams));
  const [style, setStyle] = React.useState(() => getInitialStyle(searchParams));
  const [type, setType] = React.useState(() => getInitialType(searchParams));
  const [rating, setRating] = React.useState(() =>
    getInitialRating(searchParams)
  );

  return (
    <ThemeProvider theme={theme}>
      <Header
        days={days}
        setDays={setDays}
        style={style}
        setStyle={setStyle}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}
      />
      <EventList days={days} style={style} type={type} rating={rating} />
    </ThemeProvider>
  );
}

export default App;
