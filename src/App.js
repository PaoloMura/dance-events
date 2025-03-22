import { ThemeProvider } from "@mui/material";
import EventList from "./components/EventList";
import Header from "./components/Header";
import React from "react";
import { theme } from "./lib/theme";

function App() {
  const [days, setDays] = React.useState([]);
  const [style, setStyle] = React.useState("");
  const [type, setType] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <Header
        days={days}
        setDays={setDays}
        style={style}
        setStyle={setStyle}
        type={type}
        setType={setType}
      />
      <EventList days={days} style={style} type={type} />
    </ThemeProvider>
  );
}

export default App;
