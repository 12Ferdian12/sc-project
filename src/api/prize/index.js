import axios from "axios";

const getAllPrize = async () => {
  try {
    const response = await axios.get("/api/prize");
    for (let i = 0; i < response.data.length; i++) {
      response.data[i].image = response.data[i].prizeImg;
      response.data[i].text = response.data[i].prizeName;
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch all prizes");
  }
};

export { getAllPrize };
