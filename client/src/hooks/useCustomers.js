import axios from "axios";
import { useState } from "react";

export const useCustomers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getCustomers = async (setCustomers) => {
    const customers = await axios.get("http://localhost:4000/api/customers");
    setCustomers(customers.data);
    setIsLoading(false);
  };

  const deleteCustomer = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/customers/${id}`
    );
  };

  return { getCustomers, deleteCustomer, isLoading };
};
