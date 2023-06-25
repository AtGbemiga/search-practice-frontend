export interface BooleanSearchProps {
  boolResult: boolean;
  setBoolResult: React.Dispatch<React.SetStateAction<boolean>>;
  dataResults: AllData[] | null;
}

export const BooleanSearch = ({
  boolResult,
  setBoolResult,
}: BooleanSearchProps) => {
  function handleRadioChange(value: boolean) {
    setBoolResult(value);
  }
  return (
    <div>
      <label>
        <input
          name="true"
          type="checkbox"
          checked={boolResult === true}
          onChange={() => handleRadioChange(true)}
        />
        True
      </label>
      <label>
        <input
          name="false"
          type="checkbox"
          checked={boolResult === false}
          onChange={() => handleRadioChange(false)}
        />
        False
      </label>
    </div>
  );
};
