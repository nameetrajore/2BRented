import axios from "axios";

export const useQuery = () => {
  const postQuery = async (query) => {
    await axios.post("/api/query", query);
  };

  return { postQuery };
};
