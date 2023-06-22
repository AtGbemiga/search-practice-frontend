"use client";
import SearchByFilter from "@/lib/SearchByFilter";
import { useState } from "react";

export const BooleanSearch: React.FC = () => {
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
      <label>
        <input
          type="radio"
          checked={boolResult === true}
          onChange={() => handleRadioChange(true)}
        />
        True
      </label>
      <label>
        <input
          type="radio"
          checked={boolResult === false}
          onChange={() => handleRadioChange(false)}
        />
        False
      </label>
      <button onClick={handleBool}>Boolean</button>
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
