import axios from "axios";

export const getEvents = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/events?ownerId=${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
