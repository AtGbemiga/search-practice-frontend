"use client";

import sortPageSkipLimit from "@/lib/sortPageSkipLimit";
import { useState } from "react";
import { Sort } from "./Sort";
import { Limit } from "./Limit";

export const SortPageSkipLimit = () => {
  const [sortName, setSortName] = useState("");
  const [limitNo, setLimitNo] = useState<number | null>(null);
  const [finalResults, setFinalResults] = useState<AllData[] | null>(null);

  async function handleSubmit() {
    try {
      const results = await sortPageSkipLimit(sortName, limitNo ?? undefined);
      setFinalResults(results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Sort
        sortName={sortName}
        setSortName={setSortName}
        finalResults={finalResults}
      />
      <Limit
        limitNo={limitNo}
        setLimitNo={setLimitNo}
        finalResults={finalResults}
      />
      <button onClick={handleSubmit}>Filter</button>
      {finalResults && (
        <ul>
          {finalResults.map((data) => (
            <main key={data._id}>
              <h3>{data.title}</h3>
              <li>{data.seller}</li>
            </main>
          ))}
        </ul>
      )}
    </div>
  );
};
