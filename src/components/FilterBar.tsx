import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IndustrySearch } from "./IndustrySearch";
import { Data } from "../App";

export const FilterBar = ({ setData }: {setData: React.Dispatch<React.SetStateAction<Data[]>>}) => {
  const [industry, setIndustry] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<
    { label: string; value: number }[]
  >([]);
  useEffect(() => {
    const getBySicCodes = async () => {
      const codes = selectedIndustries.map((si) => "" + si.value + "");

      try {
        const response = await fetch("http://localhost:3000/filter_sec_codes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sic_codes: codes }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        console.log("result", result);
      } catch (error) {
        console.error("Error during fetch operation:", error);
      }
    };
    getBySicCodes();
  }, [selectedIndustries]);

  return (
    <div
      style={{
        width: "35vw",
        height: "95vh",
        backgroundColor: "#E0E0E0",
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
      {industry && (
        <IndustrySearch
          selected={selectedIndustries}
          setSelected={setSelectedIndustries}
        />
      )}
    </div>
  );
};
