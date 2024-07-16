import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IndustrySearch } from "./IndustrySearch";
import { Data } from "../App";
import { SortDirection, SortType } from "../types";
const PAGE_SIZE = 15;

const getBySicCodes = async ({
  selectedIndustries,
  page,
  setData,
  setMaxPage,
  isActive,
  isDissolved,
  sort,
  sortDirection,
}: {
  selectedIndustries: { label: string; value: number }[];
  page: number;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  setMaxPage: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  isDissolved: boolean;
  sortDirection: SortDirection;
  sort: SortType;
}) => {
  const codes = selectedIndustries.map((si) => "" + si.value + "");

  try {
    const response = await fetch(
      "http://api.companies-listing.com/filter_sec_codes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sic_codes: codes,
          page,
          pageSize: PAGE_SIZE,
          isActive,
          isDissolved,
          sortDirection,
          sort,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setData(result.results);
    setMaxPage(result.maxPage);
  } catch (error) {
    console.error("Error during fetch operation:", error);
  }
};

export const FilterBar = ({
  setData,
  setMaxPage,
  page,
  sortDirection,
  sort,
}: {
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  setMaxPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  sortDirection: SortDirection;
  sort: SortType;
}) => {
  const [industry, setIndustry] = useState(false);

  const [isActive, setIsActive] = useState(true);
  const [isDissolved, setIsDissolved] = useState(true);

  const [employees, setEmployees] = useState(false);

  const [selectedIndustries, setSelectedIndustries] = useState<
    { label: string; value: number }[]
  >([]);

  useEffect(() => {
    getBySicCodes({
      selectedIndustries,
      page,
      setData,
      setMaxPage,
      isActive,
      isDissolved,
      sortDirection,
      sort,
    });
  }, [selectedIndustries, page, isActive, isDissolved, sortDirection, sort]);

  return (
    <div
      style={{
        width: "300px",
        maxWidth: "300px",

        height: "100vh",
        backgroundColor: "#E0E0E0",
      }}
    >
      <div
        style={{
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
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={() => {
            setIsActive(!isActive);
          }}
          color={isActive ? "success" : "primary"}
        >
          active
        </Button>
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={() => {
            setIsDissolved(!isDissolved);
          }}
          color={isDissolved ? "success" : "primary"}
        >
          dissolved
        </Button>
      </div>
    </div>
  );
};

// const EmployeeSelector = () => {
//   const containerStyle = {
//     backgroundColor: "#fff",
//     padding: "20px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     borderRadius: "8px",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     marginTop: "10px",
//   };

//   const headingStyle = {
//     fontSize: "24px",
//     marginBottom: "20px",
//     color: "#333",
//   };

//   const inputContainerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "10px",
//   };

//   const inputStyle = {
//     padding: "10px",
//     fontSize: "16px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     width: "100%",
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         height: "100%",
//         backgroundColor: "#E0E0E0",
//         margin: "0",
//       }}
//     >
//       {
//         //@ts-ignore
//         <div style={containerStyle}>
//           <h1 style={headingStyle}>Select number of employees</h1>
//           <div style={inputContainerStyle}>
//             <input
//               type="number"
//               placeholder="minimum"
//               style={inputStyle}
//               min="0"
//             />
//             <input
//               type="number"
//               placeholder="maximum"
//               style={inputStyle}
//               min="0"
//             />
//           </div>
//         </div>
//       }
//     </div>
//   );
// };
