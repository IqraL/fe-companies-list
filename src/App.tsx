import React, { useState } from "react";
import { sic_codes } from "./assets/sic_codes";
import { FilterBar } from "./components/FilterBar";
import { Dashboard } from "./components/Dashboard";
import Pagination from "@mui/material/Pagination";
import { SortDirection, SortType } from "./types";

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
  const [sort, setSort] = useState<SortType>("companyName");
  const [sortDirection, setSortDirection] = useState<SortDirection>(1);

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
          <FilterBar
            setData={setData}
            setMaxPage={setMaxPage}
            page={page}
            sort={sort}
            sortDirection={sortDirection}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "60vh",
          }}
        >
          {!data.length ? (
            <h1>Please select an industry</h1>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "60vh",
              }}
            >
              <Dashboard
                data={data}
                setSort={setSort}
                setSortDirection={setSortDirection}
                sort={sort}
                sortDirection={sortDirection}
              />
              <div style={{ display: "flex", marginTop: 10 }}>
                <Pagination
                  count={maxPage}
                  color="primary"
                  onChange={(_, page) => {
                    setPage(page);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
