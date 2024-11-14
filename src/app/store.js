import { configureStore } from "@reduxjs/toolkit";

let state = {
  token: null,
  user: {
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    id: null,
  },
};

export function setToken(token) {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
}

export function setProfile({ email, firstName, lastName, userName, id }) {
  return {
    type: "SET_PROFILE",
    payload: {
      email,
      firstName,
      lastName,
      userName,
      id,
    },
  };
}

export function setUserName({ userName }) {
  return {
    type: "SET_USERNAME",
    payload: {
      userName,
    },
  };
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...currentState, user: { ...currentState.user, ...action.payload } };

    case "SET_TOKEN":
      return { ...currentState, token: action.payload };

    case "SET_USERNAME":
      return { ...currentState, user: { ...currentState.user.userName, ...action.payload } };

    default:
      return currentState;
  }
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});
