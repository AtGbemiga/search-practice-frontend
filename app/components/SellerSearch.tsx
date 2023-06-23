export interface SellerSearchProps {
  sellerResult: string;
  setSellerResult: React.Dispatch<React.SetStateAction<string>>;
  dataResults: AllData[] | null;
}

export const SellerSearch = ({
  sellerResult,
  setSellerResult,
}: SellerSearchProps) => {
  function handleCheckboxChange(value: string) {
    setSellerResult(value);
  }

  return (
    <div>
      <label htmlFor="sellers">Pick Seller</label>
      <select
        name="sellers"
        id="sellers"
        value={sellerResult}
        onChange={(e) => handleCheckboxChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="ck ventures">ck ventures</option>
        <option value="don">don</option>
        <option value="big mike">big mike</option>
        <option value="made">made</option>
      </select>
    </div>
  );
};
