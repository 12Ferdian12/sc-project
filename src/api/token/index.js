import axios from "axios";

const getAllToken = async () => {
  try {
    const response = await axios.get("/api/token");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch all prizes");
  }
};

const getTokenByCode = async (code) => {
  try {
    const response = await axios.get(`/api/token?code=${code}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch prize by code");
  }
};

export { getAllToken, getTokenByCode };
