import axios from "axios";

export const getTickets = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await axios.get(`http://localhost:3000/tickets?ownerId=${id}&isUsed=false`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getExpiredTickets = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await axios.get(`http://localhost:3000/tickets?ownerId=${id}&isExpired=true`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
