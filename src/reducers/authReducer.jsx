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

      // const existingUser = state.registrations.find(
      //   (user) => user.email === action.payload.email
      // );

      // if (existingUser) {
      //   return {
      //     ...state,
      //     error: "Email is already registered",
      //   };
      // } else {
      //   return {
      //     ...state,
      //     registrations: [...state.registrations, action.payload],
      //     error: null,
      //   };
      // }

      return {
        ...state,
        registrations: [...state.registrations, action.payload],
        error: null,
      };

    // case "LOGIN_USER":
    //   // localStorage.setItem(
    //   //   "auth",
    //   //   JSON.stringify({ ...state, user: action.payload })
    //   // );

    //   const { email, password } = action.payload;
    //   const matchedUser = state.registrations.find(
    //     (user) => user.emai === email && user.password === password
    //   );
    //   if (matchedUser) {
    //     return {
    //       ...state,
    //       user: matchedUser,
    //       error: null,
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       error: "Invalid Email or password",
    //     };
    //   }

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
