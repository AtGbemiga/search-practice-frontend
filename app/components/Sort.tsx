interface SortProps {
  sortName: string;
  setSortName: React.Dispatch<React.SetStateAction<string>>;
  finalResults: AllData[] | null;
}

export const Sort = ({ sortName, setSortName }: SortProps) => {
  function handleCheckBox(value: string) {
    setSortName(value);
  }
  return (
    <div>
      <label htmlFor="sort">choose view</label>
      <select
        name="sort"
        id="sort"
        value={sortName}
        onChange={(e) => handleCheckBox(e.target.value)}
      >
        <option>--</option>
        <option value="title">Ascend</option>
        <option value="-title">Descend</option>
      </select>
    </div>
  );
};
