import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { MultiSelect } from "react-multi-select-component";
import { industries_sic_codes, sic_codes } from "./assets/sic_codes";

function App() {
  const [industry, setIndustry] = useState(false);

  useEffect(() => {
    console.log(industry);
  }, [industry]);

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
          width: "35vw",
          height: "95vh",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          endIcon={!industry ? <AddIcon /> : <RemoveIcon />}
          onClick={() => {
            setIndustry(!industry);
          }}
        >
          Industry
        </Button>
        {industry && <IndustrySearch />}
      </div>
    </div>
  );
}
// Code: 1110;
// Description;

export const IndustrySearch = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select industries</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={industries_sic_codes}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default App;
