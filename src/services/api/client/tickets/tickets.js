import axios from "axios";

export const getTickets = async ({ queryKey }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await axios.get(
      `http://localhost:3000/tickets?ownerId=${queryKey[1]}&isUsed=false`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getExpiredTickets = async ({ queryKey }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data } = await axios.get(
      `http://localhost:3000/tickets?ownerId=${queryKey[1]}&isExpired=true`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
