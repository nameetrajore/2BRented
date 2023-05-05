import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";

const initialAuthState = {
  user: localStorage.getItem("user") ? localStorage.getItem("user") : "",
  _id: localStorage.getItem("_id") ? localStorage.getItem("_id") : -1,
};

const initialOwnerAuthState = {
  owner: localStorage.getItem("owner") ? localStorage.getItem("owner") : "",
  ownerId: localStorage.getItem("ownerId")
    ? localStorage.getItem("ownerId")
    : -1,
};

const initialManagerAuthState = {
  manager: localStorage.getItem("manager")
    ? localStorage.getItem("manager")
    : "",
  managerId: localStorage.getItem("managerId")
    ? localStorage.getItem("managerId")
    : -1,
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

const initialLocationState = {
  state: "",
  city: "",
  pincode: 0,
  address: "",
};

const initialBikeState = {
  brand: "",
  model: "",
  year: new Date().toISOString().substring(0, 4),
  location: initialLocationState,
  type: "City",
  fuelType: "Petrol",
  registrationNumber: "",
  bookingsId: [],
  bikeAge: 0,
  dailyRate: 100,
  kmsDriven: 0,
  rating: 0,
  mileage: 0,
  imageUrl: "",
  owner: "",
};

const setLocation = (state, action) => {
  const { address, city, pincode, stateName } = action.payload;
  state.location = {
    ...state.location,
    address,
    city,
    pincode,
    state: stateName,
  };
};

const bikeSlice = createSlice({
  name: "bikeState",
  initialState: initialBikeState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setModel(state, action) {
      state.model = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },

    setType(state, action) {
      state.type = action.payload;
    },
    setFuelType(state, action) {
      state.fuelType = action.payload;
    },
    setRegistrationNumber(state, action) {
      state.registrationNumber = action.payload;
    },
    setBookingsId(state, action) {
      state.bookingsId = action.payload;
    },
    setBikeAge(state, action) {
      state.bikeAge = action.payload;
    },
    setRating(state, action) {
      state.rating = action.payload;
    },
    setImageUrl(state, action) {
      state.imageUrl = action.payload;
    },
    setMileage(state, action) {
      state.mileage = action.payload;
    },
    setOwnerID(state, action) {
      state.owner = action.payload;
    },
    setLocation,
  },
});

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

const ownerAuthSlice = createSlice({
  name: "ownerAuthSlice",
  initialState: initialOwnerAuthState,
  reducers: {
    setOwner(state, action) {
      state.owner = action.payload;
      localStorage.setItem("owner", action.payload);
    },
    setOwnerId(state, action) {
      state.ownerId = action.payload;
      localStorage.setItem("ownerId", action.payload);
    },
  },
});

const managerAuthSlice = createSlice({
  name: "managerAuthSlice",
  initialState: initialManagerAuthState,
  reducers: {
    setManager(state, action) {
      state.manager = action.payload;
      localStorage.setItem("manager", action.payload);
    },
    setManagerId(state, action) {
      state.managerId = action.payload;
      localStorage.setItem("managerId", action.payload);
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
  bikeDetails: bikeSlice.reducer,
  ownerAuth: ownerAuthSlice.reducer,
  booking: bookingSlice.reducer,
  filter: filterSlice.reducer,
  managerAuth: managerAuthSlice.reducer,
});

const store = configureStore({ reducer: reducers });
export const authActions = authSlice.actions;
export const ownerAuthActions = ownerAuthSlice.actions;
export const managerAuthActions = managerAuthSlice.actions;
export const bookingActions = bookingSlice.actions;
export const filterActions = filterSlice.actions;
export const bikeDetailsActions = bikeSlice.actions;

export default store;
