import axios from "axios";

export const useQuery = () => {
  const postQuery = async (query) => {
    const response = axios.post("http://localhost:4000/api/query", query);
  };

  return { postQuery };
};
