export const registerUser = (userData) => ({
  type: "REGISTER_USER",
  payload: userData,
});

export const loginUser = (userData) => ({
  type: "LOGIN_USER",
  payload: userData,
});

export const addToCart = (product, quantity) => ({
  type: "ADD_TO_CART",
  payload: { product, quantity },
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateCartItemQty = (productId, newQuantity) => ({
  type: "UPDATE_CART_ITEM",
  payload: { productId, newQuantity },
});
