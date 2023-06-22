"use client";
import SearchByFilter from "@/lib/SearchByFilter";
import { useState } from "react";
import { BooleanSearch } from "./BooleanSearch";

export const FilterSearch: React.FC = () => {
  const [boolResult, setBoolResult] = useState<boolean | null>(false);
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

  return (
    <div>
      <BooleanSearch
        boolResult={boolResult === null ? false : (boolResult as boolean)}
        setBoolResult={setBoolResult}
        dataResults={dataResults}
      />
      <button onClick={handleBool}>Filter</button>
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
