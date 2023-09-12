const initialState = {
  user: null,
  error: null,
  registrations: JSON.parse(localStorage.getItem("Userdetails")) || [],
  isLoggedIn:
    JSON.parse(localStorage.getItem("matchedCurrentUser"))?.isLoggedIn || false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      const { data, userId } = action.payload;
      const newRegistration = { data: data, userId: userId };
      // const updatedRegistrations = [...state.registrations, action.payload];
      const updatedRegistrations = [...state.registrations, newRegistration];
      localStorage.setItem("Userdetails", JSON.stringify(updatedRegistrations));
      return {
        ...state,
        registrations: updatedRegistrations,
        error: null,
      };
    case "LOGIN_USER":
      const { email, password } = action.payload;
      let matchedCurrentUser = {};
      console.log("New one", email, password, state.registrations);
      if (email && password) {
        state.registrations.forEach((userDetails) => {
          console.log(userDetails, "userDetails");
          if (
            userDetails.data.email === email &&
            userDetails.data.password === password
          ) {
            matchedCurrentUser = userDetails;
            matchedCurrentUser["isLoggedIn"] = true;
            localStorage.setItem(
              "matchedCurrentUser",
              JSON.stringify(matchedCurrentUser)
            );
          }
        });
        console.log("matchedCurrentUser", matchedCurrentUser);
        if (matchedCurrentUser["isLoggedIn"]) {
          return {
            ...state,
            user: matchedCurrentUser,
            error: null,
            isLoggedIn: true,
          };
        } else {
          return {
            ...state,
            user: null,
            error: "Invalid Email or password",
            isLoggedIn: false,
          };
        }
      } else {
        // localStorage.removeItem("loggedInUser");
        return {
          ...state,
          user: null,
          error: "Please enter Email and password",
          isLoggedIn: false,
        };
      }

    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGOUT":
      console.log("working in logout");
      const loggedUser = JSON.parse(localStorage.getItem("matchedCurrentUser"));
      state.registrations.map((user) => {
        if (user.userId == loggedUser.userId) {
          user.cart = loggedUser.cart;
        }
      });
      console.log(state.registrations);
      localStorage.setItem("Userdetails", JSON.stringify(state.registrations));
      localStorage.setItem("matchedCurrentUser", "null");
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
