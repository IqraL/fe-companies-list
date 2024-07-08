import React from "react";
import { sic_codes } from "./assets/sic_codes";
import { FilterBar } from "./components/FilterBar";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <div
        className="header"
        style={{
          height: "5vh",
          width: "100vw",
          backgroundColor: "#343A40",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FilterBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;


