"use client";
import React, { useState, useEffect } from "react";
import getAllData from "@/lib/getAllData";

const NameSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<AllData[] | null>(null);

  const handleSearch = async () => {
    try {
      const results = await getAllData(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults?.length ? (
        <>
          <h3>
            {searchResults.length} result
            {searchResults.length > 1 ? "s" : null} found
          </h3>
          <ul>
            {searchResults.map((result) => (
              <div key={result._id}>
                <li>{result.title}</li>
                <li>{result.cost}</li>
              </div>
            ))}
          </ul>
        </>
      ) : searchResults?.length === 0 ? (
        <h3>No result found. Lol</h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default NameSearch;
