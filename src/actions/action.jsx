export const registerUser = (userData) => ({
  type: "REGISTER_USER",
  // payload: userData,
  payload: { data: userData, userId: Math.random() * 1234 },
});

export const loginUser = (userData) => ({
  type: "LOGIN_USER",
  payload: userData,
});
export const logout = () => {
  localStorage.setItem("isLoggedIn", "false"); // Set isLoggedIn to false in localStorage
  return {
    type: "LOGOUT",
  };
};
export const addToCart = (product, quantity, userId) => ({
  type: "ADD_TO_CART",
  payload: { product, quantity, userId },
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateCartItemQty = (productId, newQuantity) => ({
  type: "UPDATE_CART_ITEM",
  payload: { productId, newQuantity },
});

export const cartTotalItem = () => ({
  type: "CART_TOTAL_ITEM",
});

export const updateCart = (products) => ({
  type: "UPDATE_CART",
  payload: { products },
});
