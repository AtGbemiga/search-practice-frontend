import axios, { AxiosError } from "axios";

export default async function SearchByFilter(
  boolResult?: boolean,
  sellerResult?: string,
  numberSearch?: number | null
): Promise<AllData[]> {
  const url = "https://search-practice-backend.vercel.app/api/v1/search";
  const params: { [key: string]: string | boolean } = {
    promote: boolResult || false,
    seller: sellerResult || "",
  };

  if (numberSearch !== null && numberSearch !== undefined) {
    params.numberFilters = `cost=${numberSearch}`;
  }

  try {
    const { data } = await axios.get(url, { params });
    return data.final as AllData[];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    }
    throw error;
  }
}
