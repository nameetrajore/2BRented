import axios from "axios";

export const useQueries = () => {
  const getQueries = async (setQueries) => {
    const response = await axios.get("/api/query");
    setQueries(response.data);
  };

  return { getQueries };
};
