import axios from "axios";

const defaultState = {
  all: {},
  users: {},
  currentUser: "",
  email: "",
  priceData: {},
  isDataInitialized: false,
  bookings: [],
  isLoading: false,
  loggedin: false,
  registeredUser: false,
  registeredUserData: {},
  pindata: {},
  citydata: {},
};

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "DATA_INITIALIZED":
      return {
        ...state,
        all: action.all.data,
        users: action.all.data,
        pindata: action.all.data,

        isDataInitialized: true,
      };

    case "REGISTERED_USER":
      return {
        ...state,
        registeredUserData: action.userData.data,
        registeredUser: true,
      };
    case "DATA_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "BOOKINGS":
      return {
        ...state,
        bookings: action.guests.data,
        isLoading: false,
      };

    case "LOGIN":
      return {
        ...state,
        loggedin: true,
        email: action.data.email,
        currentUser: action.data.name,
      };

    case "LOGOUT":
      return {
        ...state,
        loggedin: false,
        email: "",
        currentUser: "",
      };
    case "PIN":
      const newArray0 = state.users.filter(
        (user) => user.pin.toString() === action.pin
      );
      return {
        ...state,
        pindata: newArray0,
        users: newArray0,
      };

    case "CITY":
      const newArray = state.all.filter(
        (user) =>
          user.city.toString().toLowerCase() === action.city.toLowerCase()
      );
      return {
        ...state,
        citydata: newArray,

        users: newArray,
      };
    case "PRICE":
      const newArray2 = state.users.filter(
        (user) =>
          user.rent.toString() >= action.price[0] &&
          user.rent.toString() <= action.price[1]
      );
      return {
        ...state,
        priceData: newArray2,
        users: newArray2,
      };
    case "CLR":
      return {
        ...state,
        users: state.all,
        priceData: state.all,
        pindata: state.all,
      };

    default:
      return state;
  }
}

export const getInitalData = () => async (dispatch) => {
  dispatch({ type: "DATA_REQUEST" });
  try {
    let all = await axios.get("https://find-home2021.herokuapp.com/users/");
    let guests = await axios.get(`https://find-home2021.herokuapp.com/guest`);

    dispatch({ type: "BOOKINGS", guests });
    // You're dispatching not only the metadata, but also setting isDataInitialized to true, to denote, that data has been loaded
    dispatch({ type: "DATA_INITIALIZED", all, isDataInitialized: true });
  } catch (error) {
    console.log(error);
  }
};

export const getregisteredUserData = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "LOGIN", data });
    let userData = await axios.get(
      `https://find-home2021.herokuapp.com/users/${data.email}`
    );

    if (userData.data != null) {
      dispatch({ type: "REGISTERED_USER", userData, registeredUser: true });
    }
  } catch (error) {
    console.log(error);
  }
};
