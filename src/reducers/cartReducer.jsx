const initialStat = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  // total_item: "",
};

const cartReducer = (state = initialStat, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }

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

    // case "CART_TOTAL_ITEM":
    //   let updateItemVal = state.cart.reduce((initialVal, curElm) => {
    //     let { quantity } = curElm;
    //     initialVal = initialVal + quantity;
    //     return initialVal;
    //   }, 0);

    //   // localStorage.setItem("cart", JSON.stringify({ ...state, updateItemVal }));
    //   return {
    //     ...state,
    //     total_item: updateItemVal,
    //   };

    default:
      return state;
  }
};

export default cartReducer;
