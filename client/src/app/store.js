import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";

const initialAuthState = {
  user: "",
};



const initialFullAuthState = {
  userFirstName: "",
  userName: "",
  userPhoneNumber: "",
  userEmail: "",
  userID: "",
}

const initialBookingState = {
  dropDate: "",
  pickupDate: "",
  dropLocation: "",
  pickupLocation: "",
};

const initialFilterState = {
  priceRange: [800, 1200],
  bikeType: "",
  bikeCompany: "",
  rating: 0,
  kmsDriven: 400000,
  bikeAge: 2,
  fuelType: "all",
};

const initialLocationState = {
  state: "",
  city: "",
  pincode: 0,
  address: "",
}


const initialBikeState = {
  brand: "",
  model: "",
  year: new Date().toISOString().substring(0,4),
  location: initialLocationState,
  type: "city",
  fuelType: "petrol",
  registrationNumber: "",
  bookingsId: [],
  bikeAge: "",
  dailyRate: "",
  kmsDriven: "",
  rating: "",
  mileage: "",
  imageUrl: "",
  owner: "",
}

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
      state.brand = action.payload
    },
    setModel(state, action) {
      state.model = action.payload
    },
    setYear(state, action) {
      state.year = action.payload
    },

    setType(state, action) {
      state.type = action.payload
    },
    setFuelType(state, action) {
      state.fuelType = action.payload
    },
    setRegistrationNumber(state, action) {
      state.registrationNumber = action.payload
    },
    setBookingsId(state, action) {
      state.bookingsId = action.payload
    },
    setBikeAge(state, action) {
      state.bikeAge = action.payload  
    },
    setRating(state, action) {
      state.rating = action.payload
    },
    setImageUrl(state, action) {
      state.imageUrl = action.payload
    },
    setMileage(state, action) {
      state.mileage = action.payload
    },
    setOwnerID(state, action) {
      state.owner = action.payload
    },    
    setLocation,
  },
})

const authSlice = createSlice({
  name: "authState",
  initialState: initialAuthState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const fullAuthSlice = createSlice({
  name: "fullAuthState",
  initialState: initialFullAuthState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserPhoneNumber(state, action) {
      state.userPhoneNumber = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setUserId(state, action) {
      state.userID = action.payload;
    }
  },
})

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState: initialBookingState,
  reducers: {
    setDropDate(state, action) {
      state.dropDate = action.payload;
    },
    setPickupDate(state, action) {
      state.pickupDate = action.payload;
    },
    setDropLocation(state, action) {
      state.dropLocation = action.payload;
    },
    setPickupLocation(state, action) {
      state.pickupLocation = action.payload;
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
  },
});



const reducers = combineReducers({
  auth: authSlice.reducer,
  bikeDetails: bikeSlice.reducer,
  fullauth: fullAuthSlice.reducer,
  booking: bookingSlice.reducer,
  filter: filterSlice.reducer,
});

const store = configureStore({ reducer: reducers });
export const authActions = authSlice.actions;
export const fullAuthAction = fullAuthSlice.actions;
export const bookingActions = bookingSlice.actions;
export const filterActions = filterSlice.actions;
export const bikeDetailsActions = bikeSlice.actions;

export default store;
