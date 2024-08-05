import axios from "axios";

const BASE_URL = "https://api.openbrewerydb.org/v1/breweries";

export const getData = async (count = 10) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        per_page: count,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random users:", error);
    throw error;
  }
};
