import axios from "axios";

export const login = async (payload) => {
  try {
    const { data } = await axios.post(`http://localhost:3000/users?${payload}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
