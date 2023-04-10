import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../app/store";

export const useGetBike = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getBikes = async (filter, setBikes) => {
    console.log(filter);
    setIsLoading(true);
    let query = `bikes?pickupLocation=${filter.pickupLocation}&dropLocation=${filter.dropLocation}&pickupDate=${filter.pickupDate}&dropDate=${filter.dropDate}`;
    if (filter.priceRange)
      query += `&priceLow=${filter.priceRange[0]}&priceHigh=${filter.priceRange[1]}`;
    if (filter.bikeType && filter.bikeType != "")
      query += `&bikeType=${filter.bikeType}`;
    if (filter.bikeCompany && filter.bikeCompany != "")
      query += `&bikeCompany=${filter.bikeCompany}`;
    if (filter.rating && filter.rating != 0)
      query += `&rating=${filter.rating}`;
    if (filter.kmsDriven) query += `&kmsDriven=${filter.kmsDriven}`;
    if (filter.bikeAge) query += `&bikeAge=${filter.bikeAge}`;
    if (filter.fuelType) query += `&fuelType=${filter.fuelType}`;

    const response = await fetch(`http://localhost:4000/api/` + query);

    console.log(`http://localhost:4000/api/` + query);

    const jsonRes = await await response.json();

    if (response.ok) {
      console.log(jsonRes);
      setBikes(jsonRes);
    }
    setIsLoading(false);
  };

  return { getBikes, isLoading };
};
