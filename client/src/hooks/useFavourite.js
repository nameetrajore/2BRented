import { useSelector } from "react-redux";

export const useFavourite = () => {
  const id = useSelector((state) => state.auth._id);
  const storeIsFavourite = async (bikeId, _isFavourite, bike) => {
    if (_isFavourite) {
      bike.isFavourite = true;
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
      bike.isFavourite = false;
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
