import { useSelector } from "react-redux";

export const useFavourite = () => {
  const id = useSelector((state) => state.auth._id);
  const storeIsFavourite = async (bikeId, _isFavourite) => {
    if (_isFavourite) {
      const response = await fetch(
        `http://localhost:4000/api/customers/${id}?addFavourite=${bikeId}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    } else {
      const response = await fetch(
        `http://localhost:4000/api/customers/${id}?removeFavourite=${bikeId}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    }
  };

  return { storeIsFavourite };
};
