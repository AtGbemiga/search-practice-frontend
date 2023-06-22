interface FilterSearchProps {
  handleBool: () => void;
}

export const FilterBtn: React.FC<FilterSearchProps> = ({ handleBool }) => {
  return <button onClick={handleBool}>Boolean</button>;
};
