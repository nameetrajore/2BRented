import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../app/store";

export const useGetBikes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth._id);

  const getBikes = async (filter, setBikes) => {
    // console.log(filter);
    setIsLoading(true);
    let query = `bikes?pickupLocation=${filter.pickupLocation}&dropLocation=${filter.dropLocation}&pickupDate=${filter.pickupDate}&dropDate=${filter.dropDate}`;
    if (filter.priceRange && filter.priceRange[1] !== 0)
      query += `&priceLow=${filter.priceRange[0]}&priceHigh=${filter.priceRange[1]}`;
    if (filter.bikeType && filter.bikeType != "")
      query += `&type=${filter.bikeType}`;
    if (filter.bikeCompany && filter.bikeCompany != "")
      query += `&brand=${filter.bikeCompany}`;
    if (filter.rating && filter.rating != 0)
      query += `&rating=${filter.rating}`;
    if (filter.kmsDriven && filter.kmsDriven !== 0)
      query += `&kmsDriven=${filter.kmsDriven}`;
    if (filter.bikeAge && filter.bikeAge !== 0)
      query += `&bikeAge=${filter.bikeAge}`;
    if (filter.fuelType && filter.fuelType !== "all")
      query += `&fuelType=${filter.fuelType}`;

    const responseBikes = await fetch(`/api/` + query);
    const jsonResBikes = await responseBikes.json();
    console.log(jsonResBikes);
    if (responseBikes.ok) {
      if (id !== -1) {
        const responseFavourites = await fetch(`/api/customers?_id=${id}`);
        const jsonResFavourites = await responseFavourites.json();

        if (responseFavourites.ok) {
          const bikes = jsonResBikes.map((bike) => {
            if (jsonResFavourites[0].favourites.includes(bike._id))
              return { ...bike, isFavourite: true };
            else return { ...bike, isFavourite: false };
          });
          setBikes(bikes);
        }
      } else {
        console.log(jsonResBikes);
        setBikes(jsonResBikes);
      }
      setIsLoading(false);
    }
  };

  return { getBikes, isLoading };
};
