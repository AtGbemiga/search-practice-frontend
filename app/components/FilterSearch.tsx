"use client";
import { useState } from "react";
import getAllData from "@/lib/getAllData";

export const FilterSearch = () => {
  const [equal, setEqual] = useState<number | null>(null);
  const [displayResult, setDisplayResult] = useState<AllData[] | null>(null);

  async function handleFilter() {
    try {
      const result = await getAllData(equal);
      setDisplayResult(result);
    } catch (error) {
      console.log("Filter error is", error);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEqual(Number(event.target.value));
  }

  return (
    <div>
      <input type="number" value={equal} onChange={handleChange} />
      <button onClick={handleFilter}>Filter</button>
      {displayResult?.map((item) => (
        <div key={item._id}>
          <li>{item.cost}</li>
        </div>
      ))}
    </div>
  );
};
