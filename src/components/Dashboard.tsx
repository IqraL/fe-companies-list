import React from "react";
import { Data } from "../App";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { sic_codes } from "../assets/sic_codes";

const rowStyle = {
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: "1px",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  overflow: "hidden",
  padding: "0 5px", // Adjusted padding to fit the height
  textAlign: "left",
  verticalAlign: "middle", // Vertically align text to the middle
  wordBreak: "normal",
  height: "20px", // Set row height to 20px
  lineHeight: "20px", // Ensures text is vertically centered
  boxSizing: "border-box", // Ensures padding and border are included in the height
};

const headerStyle = {
  backgroundColor: "#9b9b9b",
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: "1px",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: "normal",
  overflow: "hidden",
  padding: "0 5px", // Adjusted padding to fit the height
  textAlign: "left",
  verticalAlign: "middle", // Vertically align text to the middle
  wordBreak: "normal",
  height: "20px", // Set header height to 20px
  lineHeight: "20px", // Ensures text is vertically centered
  boxSizing: "border-box", // Ensures padding and border are included in the height
  width: "180px",
};

export const Dashboard = ({ data }: { data: Data[] }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "left",
        marginTop: "25px",
        marginLeft: "25px",
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
          width: "auto",
        }}
        className="tg"
      >
        <thead>
          <tr>
            {[
              "Company name",
              "Company number",
              "Company status",
              "Number of employees",
              "Industry",
            ].map((header, index) => (
              <th
                key={index}
                //@ts-ignore
                style={{
                  ...headerStyle,
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {header}
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <SwapVertIcon />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((companyData, index) => (
            <tr key={index} style={{ height: "20px" }}>
              <Cell
                key={`${companyData.companyNumber}_${companyData.companyName}}`}
                value={companyData.companyName}
              />
              <Cell
                key={`${companyData.companyNumber}_${companyData.companyNumber}}`}
                value={companyData.companyNumber}
              />
              <Cell
                key={`${companyData.companyNumber}_${companyData.company_status}}`}
                value={companyData.company_status}
              />
              <Cell
                key={`${companyData.companyNumber}_${companyData.numberOfEmployees}}`}
                value={`${companyData.numberOfEmployees}`}
              />
              <Cell
                key={`${companyData.companyNumber}_${companyData.sic_codes}}`}
                value={companyData.sic_codes
                  .map((sicCode) => {
                    const sicCodeObj = sic_codes.find(
                      (sicCodeObj: any) => Number(sicCodeObj.Code) === Number(sicCode)
                    );
                    return sicCodeObj ? sicCodeObj.FDescription : "";
                  })
                  .join(", ")}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Cell = ({ value, key }: { value: string; key: string }) => {
  return (
    //@ts-ignore
    <td key={key} style={{ ...rowStyle }}>
      {value}
    </td>
  );
};
