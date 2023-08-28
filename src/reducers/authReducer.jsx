const initialState = {
  user: null,
  error: null,
  registrations: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      // localStorage.setItem(
      //   "auth",
      //   JSON.stringify({ ...state, user: action.payload })
      // );
      return {
        ...state,
        registrations: [...state.registrations, action.payload],
        error: null,
      };

    case "LOGIN_USER":
      // localStorage.setItem(
      //   "auth",
      //   JSON.stringify({ ...state, user: action.payload })
      // );

      const { email, password } = action.payload;
      const matchedUser = state.userData.find(
        (user) => user.emai === email && user.password === password
      );
      if (matchedUser) {
        return {
          ...state,
          user: matchedUser,
          error: null,
        };
      } else {
        return {
          ...state,
          error: "Invalid Email or password",
        };
      }

    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
