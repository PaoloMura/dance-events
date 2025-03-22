import "./App.css";
import EventList from "./components/EventList";
import Header from "./components/Header";
import React from "react";

function App() {
  const [days, setDays] = React.useState([]);

  return (
    <div>
      <Header days={days} setDays={setDays} />
      <EventList days={days} />
    </div>
  );
}

export default App;
