import axios, { AxiosError } from "axios";

export default async function getAllData(): Promise<AllData[]> {
  const url = "https://search-practice-backend.vercel.app/api/v1/search";

  try {
    const { data } = await axios.get(url);
    return data.final as AllData[];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    }
    throw error;
  }
}
