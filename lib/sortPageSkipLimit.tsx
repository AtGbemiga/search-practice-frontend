import axios, { AxiosError } from "axios";

export default async function sortPageSkipLimit(
  sortName?: string,
  limitNo?: number
): Promise<AllData[]> {
  const url = "https://search-practice-backend.vercel.app/api/v1/search";
  const config = {
    params: {
      sort: sortName,
      limit: limitNo,
    },
  };

  try {
    const { data } = await axios.get(url, config);
    return data.final as AllData[];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    }
    throw error;
  }
}
