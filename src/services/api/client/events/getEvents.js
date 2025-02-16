import axios from "axios";

export const getEvents = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await axios.get(`http://localhost:3000/events?ownerId=${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
