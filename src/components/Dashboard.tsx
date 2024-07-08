import React from "react";
import { Data } from "../App";

const mockData = [
  {
    companyName: "NORTHWICH VICTORIA CLUB COMPANY LIMITED",
    companyNumber: "00011462",
    company_status: "active",
    filePath:
      "jan2023-split-folder/folder_1/Prod224_0001_00011462_20221231.html",
    numberOfEmployees: 5,
    profitAndLoss: [],
    sic_codes: ["68209"],
    _id: "667f1172236ce12295836e34",
  },
];

const rowStyle = {
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: "1px",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  overflow: "hidden",
  padding: "10px 5px",
  textAlign: "left",
  verticalAlign: "top",
  wordBreak: "normal",
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
  padding: "10px 5px",
  textAlign: "left",
  verticalAlign: "top",
  wordBreak: "normal",
};
export const Dashboard = ({data}:{data:Data[]}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        marginTop: "25px" 

      }}
    >
      <table
        style={{ borderCollapse: "collapse", borderSpacing: 0 }}
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
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {data.map((companyData, index) => (
              <tr>
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
                  value={`${companyData.sic_codes}`}
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
