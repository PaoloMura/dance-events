import "./App.css";
import EventList from "./components/EventList";
import Header from "./components/Header";
import React from "react";

function App() {
  const [days, setDays] = React.useState([]);
  const [style, setStyle] = React.useState("");
  const [type, setType] = React.useState("");

  return (
    <div>
      <Header
        days={days}
        setDays={setDays}
        style={style}
        setStyle={setStyle}
        type={type}
        setType={setType}
      />
      <EventList days={days} style={style} type={type} />
    </div>
  );
}

export default App;
