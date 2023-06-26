interface LimitProps {
  limitNo: number | null;
  setLimitNo: React.Dispatch<React.SetStateAction<number | null>>;
  finalResults: AllData[] | null;
}

export const Limit = ({ limitNo, setLimitNo }: LimitProps) => {
  function handleChange(value: number) {
    setLimitNo(value);
  }

  return (
    <div>
      <p>item limit</p>
      <input
        type="number"
        name="limit"
        onChange={(e) => handleChange(Number(e.target.value))}
        value={limitNo !== null ? limitNo : ""}
      />
    </div>
  );
};
