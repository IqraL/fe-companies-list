import React from "react";
import { MultiSelect } from "react-multi-select-component";
import { industries_sic_codes } from "../assets/sic_codes";

//[{"label":"Growing of cereals (except rice), leguminous crops and oil seeds","value":1110}]

export const IndustrySearch = ({
  selected, setSelected,
}: {
  selected: { label: string; value: number; }[];
  setSelected: React.Dispatch<
    React.SetStateAction<
      {
        label: string;
        value: number;
      }[]
    >
  >;
}) => {
  return (
    <div>
      <h1>Select industries</h1>
      <MultiSelect
        options={industries_sic_codes}
        value={selected}
        onChange={setSelected}
        labelledBy="Select" />
    </div>
  );
};
