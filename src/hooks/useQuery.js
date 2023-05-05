import axios from "axios";

export const useQuery = () => {
  const postQuery = async (query) => {
    const response = axios.post("/api/query", query);
  };

  return { postQuery };
};
