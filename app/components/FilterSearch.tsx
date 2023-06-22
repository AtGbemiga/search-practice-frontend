"use client";
import SearchByFilter from "@/lib/SearchByFilter";
import { useState } from "react";
import { BooleanSearch } from "./BooleanSearch";
import { FilterBtn } from "./FilterBtn";

export const FilterSearch: React.FC = () => {
  const [boolResult, setBoolResult] = useState<boolean>(false);
  const [dataResults, setDataResults] = useState<AllData[] | null>(null);

  async function handleBool() {
    try {
      const results = await SearchByFilter(
        boolResult === null ? undefined : boolResult
      );
      setDataResults(results);
    } catch (error) {
      console.log(error);
    }
  }

  function handleRadioChange(value: boolean) {
    setBoolResult(value);
  }
  return (
    <div>
      <BooleanSearch />
      <FilterBtn handleBool={handleBool} />
      {dataResults && (
        <ul>
          {dataResults.map((data) => (
            <li key={data._id}>{data.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
