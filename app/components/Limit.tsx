interface LimitProps {
  limitNo: number;
  setLimitNo: React.Dispatch<React.SetStateAction<number>>;
  finalResults: AllData[] | null;
}

export const Limit = ({ limitNo, setLimitNo }: LimitProps) => {
  function handleChange(value: number) {
    setLimitNo(value);
  }
  return (
    <div>
      <input
        type="number"
        name="limit"
        onChange={(e) => handleChange(Number(e.target.value))}
        value={limitNo}
      />
    </div>
  );
};
