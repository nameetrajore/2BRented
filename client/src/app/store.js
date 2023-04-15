import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";

const initialAuthState = {
  user: localStorage.getItem("user") ? localStorage.getItem("user") : "",
  _id: localStorage.getItem("_id") ? localStorage.getItem("_id") : -1,
};

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const initialBookingState = {
  pickupDate: today.toISOString().substring(0, 10),
  dropDate: tomorrow.toISOString().substring(0, 10),
  dropLocation: "",
  pickupLocation: "",
};

const initialFilterState = {
  priceRange: [0, 0],
  bikeType: "",
  bikeCompany: "",
  rating: 0,
  kmsDriven: 0,
  bikeAge: 0,
  fuelType: "all",
};

const authSlice = createSlice({
  name: "authState",
  initialState: initialAuthState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", action.payload);
    },
    setId(state, action) {
      state._id = action.payload;
      localStorage.setItem("_id", action.payload);
    },
  },
});

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState: initialBookingState,
  reducers: {
    setDropDate(state, action) {
      state.dropDate = action.payload;
      localStorage.setItem("dropDate", action.payload);
    },
    setPickupDate(state, action) {
      state.pickupDate = action.payload;
      localStorage.setItem("pickupDate", action.payload);
    },
    setDropLocation(state, action) {
      state.dropLocation = action.payload;
      localStorage.setItem("dropLocation", action.payload);
    },
    setPickupLocation(state, action) {
      state.pickupLocation = action.payload;
      localStorage.setItem("pickupLocation", action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: initialFilterState,
  reducers: {
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
    setBikeType(state, action) {
      state.bikeType = action.payload;
    },
    setBikeCompany(state, action) {
      state.bikeCompany = action.payload;
    },
    setRating(state, action) {
      state.rating = action.payload;
    },
    setKmsDriven(state, action) {
      state.kmsDriven = action.payload;
    },
    setBikeAge(state, action) {
      state.bikeAge = action.payload;
    },
    setFuelType(state, action) {
      state.fuelType = action.payload;
    },
    reset: () => initialFilterState,
  },
});

const reducers = combineReducers({
  auth: authSlice.reducer,
  booking: bookingSlice.reducer,
  filter: filterSlice.reducer,
});

const store = configureStore({ reducer: reducers });
export const authActions = authSlice.actions;
export const bookingActions = bookingSlice.actions;
export const filterActions = filterSlice.actions;

export default store;
