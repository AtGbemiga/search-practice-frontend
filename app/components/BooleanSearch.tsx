export interface BooleanSearchProps {
  boolResult: boolean;
  setBoolResult: React.Dispatch<React.SetStateAction<boolean | null>>;
  dataResults: AllData[] | null;
}

export const BooleanSearch: React.FC<BooleanSearchProps> = ({
  boolResult,
  setBoolResult,
}) => {
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
    </div>
  );
};
