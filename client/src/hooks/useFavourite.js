import { useState } from "react";
export const useFavourite = () => {
  const storeIsFavourite = async (_id, _isFavourite) => {
    const response = await fetch(
      `http://localhost:4000/api/bikes/${_id}?isFavourite=${_isFavourite}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const jsonRes = await await response.json();
    console.log(
      `http://localhost:4000/bikes/${_id}?isFavourite=${_isFavourite}`
    );
  };

  return { storeIsFavourite };
};
