import Config from "react-native-config";
import { PeopleApiResponse } from "@/types/api/fetch-list";

export const fetchList = async () => {
    if (!Config.API_URL) {
        throw new Error('API_URL is not defined in environment variables');
    }
  try {
    const response = await fetch(`${Config.API_URL}/people`);
    const data: PeopleApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching list:', error);
    throw error;
  }
}