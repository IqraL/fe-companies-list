import React, { useState } from "react";
import { sic_codes } from "./assets/sic_codes";
import { FilterBar } from "./components/FilterBar";
import { Dashboard } from "./components/Dashboard";
import Pagination from "@mui/material/Pagination";

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
  const [maxPage, setMaxPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

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
        <div>
          <FilterBar setData={setData} setMaxPage={setMaxPage} page={page} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Dashboard data={data} />
          <div style={{ display: "flex", marginTop: 30 }}>
            <Pagination
              count={maxPage}
              color="primary"
              onChange={(_, page) => {
                setPage(page);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
