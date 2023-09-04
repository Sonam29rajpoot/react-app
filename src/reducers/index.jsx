import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer,
  cart: cartReducer,
});

export default rootReducer;
