export const registerUser = (userData) => ({
  type: "REGISTER_USER",
  payload: userData,
});

export const loginUser = (userData) => ({
  type: "LOGIN_USER",
  payload: userData,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateCartItemQty = (product) => ({
  type: "UPDATE_CART_ITEM",
  payload: product,
});
