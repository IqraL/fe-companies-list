import React, { useState } from "react";
import { sic_codes } from "./assets/sic_codes";
import { FilterBar } from "./components/FilterBar";
import { Dashboard } from "./components/Dashboard";

export type Data = {
  sic_codes: string[];
  _id: string;
  companyName: string;
  companyNumber: string;
  company_status: string;
  filePath: string;
  numberOfEmployees: number;
  profitAndLoss: { [key: string]: string }[];
};
function App() {
  const [data, setData] = useState<Data[]>([]);
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
          display: "grid",
          gridTemplateColumns: "2fr 9fr",
        }}
      >
        <div
        >
          <FilterBar setData={setData} />
        </div>
        <div>
          <Dashboard data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
