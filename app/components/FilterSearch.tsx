"use client";
import SearchByFilter from "@/lib/SearchByFilter";
import { useState } from "react";
import { BooleanSearch } from "./BooleanSearch";
import { SellerSearch } from "./SellerSearch";

export const FilterSearch: React.FC = () => {
  const [boolResult, setBoolResult] = useState<boolean>(false);
  const [sellerResult, setSellerResult] = useState<string>("");
  const [dataResults, setDataResults] = useState<AllData[] | null>(null);

  async function handleSubmit() {
    try {
      const results = await SearchByFilter(
        boolResult === null ? undefined : boolResult,
        sellerResult === "" ? "" : sellerResult
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
      <hr />
      <SellerSearch
        sellerResult={sellerResult}
        setSellerResult={setSellerResult}
        dataResults={dataResults}
      />
      <button onClick={handleSubmit}>Filter</button>
      {dataResults && (
        <ul>
          {dataResults.map((data) => (
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
