import axios from "axios";

const getAllQuestion = async () => {
  try {
    const response = await axios.get("/api/question");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch questions");
  }
};
export { getAllQuestion };
