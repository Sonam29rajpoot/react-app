const initialState = {
  user: null,
  error: null,
  registrations: JSON.parse(localStorage.getItem("Userdetails")) || [],
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
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
      let matchedUser = false;
      console.log("object", email, password, state.registrations);
      if ((email, password)) {
        matchedUser = state.registrations.find(
          (value) =>
            email == value.data.email && password == value.data.password
        );
        console.log("matchedUser", matchedUser);
        // matchedUser =
        //   email == state.registrations.data.email &&
        //   password == state.registrations.data.password;
      }
      // state.registrations.data.email(
      //   (user) => user.email === email && user.password === password
      // );
      if (matchedUser) {
        localStorage.setItem("isLoggedIn", "true");
        return {
          ...state,
          user: matchedUser,
          error: null,
          isLoggedIn: true,
        };
      } else {
        localStorage.removeItem("isLoggedIn");
        return {
          ...state,
          user: null,
          error: "Invalid Email or password",
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
      localStorage.setItem("isLoggedIn", "false"); // Remove the isLoggedIn key
      return {
        ...state,
        user: null,
        isLoggedIn: false, // Set isLoggedIn to false
      };
    default:
      return state;
  }
};

export default authReducer;
