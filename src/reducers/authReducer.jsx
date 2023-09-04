const initialState = {
  user: null,
  error: null,
  registrations: JSON.parse(localStorage.getItem("registrations")) || [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      const updatedRegistrations = [...state.registrations, action.payload];
      localStorage.setItem(
        "registrations",
        JSON.stringify(updatedRegistrations)
      );
      return {
        ...state,
        registrations: updatedRegistrations,
        error: null,
      };

    case "LOGIN_USER":
      const { email, password } = action.payload;
      const matchedUser = state.registrations.find(
        (user) => user.email === email && user.password === password
      );
      if (matchedUser) {
        return {
          ...state,
          user: matchedUser,
          error: null,
          isLoggedIn: true,
        };
      } else {
        return {
          ...state,
          user: null,
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
