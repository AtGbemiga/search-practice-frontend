interface NumberSearchProps {
  numberSearch: number | null;
  setNumberSearch: React.Dispatch<React.SetStateAction<number | null>>;
  dataResults: AllData[] | null;
}

export const NumberSearch = ({
  numberSearch,
  setNumberSearch,
}: NumberSearchProps) => {
  function handleChange(value: number) {
    setNumberSearch(value);
  }
  return (
    <div>
      <p>Search cost</p>
      <input
        type="number"
        name="numberSearch"
        onChange={(e) => handleChange(Number(e.target.value))}
        value={numberSearch !== null ? numberSearch : ""}
      />
    </div>
  );
};
