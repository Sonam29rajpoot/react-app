const initialStat = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialStat, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cart, action.payload])
      );

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };

    case "UPDATE_CART_ITEM":
      const { productId, newQuantity } = action.payload;
      const updatedcart = state.cart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedcart));

      return {
        ...state,
        cart: updatedcart,
      };
    default:
      return state;
  }
};

export default cartReducer;
