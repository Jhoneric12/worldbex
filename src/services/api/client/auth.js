import axios from "axios";

export const login = async (payload) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await axios.post(`http://localhost:3000/users?${payload}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
