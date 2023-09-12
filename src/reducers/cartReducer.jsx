const initialStat = {
  cart: JSON.parse(localStorage.getItem("matchedCurrentUser"))?.cart || [],
};

const cartReducer = (state = initialStat, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product } = action.payload;
      const currentUser = JSON.parse(
        localStorage.getItem("matchedCurrentUser")
      );
      if (currentUser["cart"] != undefined) {
        let hasItem = false;
        currentUser.cart.map((item) => {
          if (item.id === product.id) {
            item.quantity += 1;
            hasItem = true;
          }
        });
        if (!hasItem) {
          product.quantity = 1;
          currentUser.cart = [...currentUser.cart, product];
        }
      } else {
        product.quantity = 1;
        currentUser["cart"] = [product];
      }
      localStorage.setItem("matchedCurrentUser", JSON.stringify(currentUser));
      return { ...state, cart: currentUser.cart };
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("Userdetails", JSON.stringify(updatedCart));
      localStorage.removeItem("Userdetails");
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
      localStorage.setItem("Userdetails", JSON.stringify(updatedcart));

      return {
        ...state,
        cart: updatedcart,
      };
    case "UPDATE_CART":
      const { products } = action.payload;
      return {
        ...state,
        cart: products,
      };
    default:
      return state;
  }
};

export default cartReducer;
