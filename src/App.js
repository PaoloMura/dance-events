import "./App.css";
import EventList from "./components/EventList";
import Header from "./components/Header";
import React from "react";

function App() {
  const [days, setDays] = React.useState([]);
  const [style, setStyle] = React.useState("");

  return (
    <div>
      <Header days={days} setDays={setDays} style={style} setStyle={setStyle} />
      <EventList days={days} style={style} />
    </div>
  );
}

export default App;
