import axios from "axios";

export const getEvents = async ({ queryKey }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await axios.get(`http://localhost:3000/events?ownerId=${queryKey[1]}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
