import { ThemeProvider } from "@mui/material";
import EventList from "./components/EventList";
import Header from "./components/Header";
import React from "react";
import { theme } from "./lib/theme";

function App() {
  const [days, setDays] = React.useState([]);
  const [style, setStyle] = React.useState("");
  const [type, setType] = React.useState("");
  const [rating, setRating] = React.useState(null);

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
