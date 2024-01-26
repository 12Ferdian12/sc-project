import axios from "axios";

const getAllToken = async () => {
  try {
    const response = await axios.get("/api/token");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch token");
  }
};

const getTokenByCode = async (code) => {
  try {
    const response = await axios.get(`/api/token`);
    let data = response.data.filter((token) => token.token === code);

    return data;
  } catch (error) {
    throw new Error("Failed to fetch token by code");
  }
};

export { getAllToken, getTokenByCode };
