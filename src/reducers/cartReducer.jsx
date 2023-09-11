const initialStat = {
  cart: JSON.parse(localStorage.getItem("Userdetails")) || [],
};

const cartReducer = (state = initialStat, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product } = action.payload;
      // const userId = JSON.parse(
      //   localStorage.getItem("matchedCurrentUser")
      // )?.userId;
      // console.log(product, userId, "payload");
      // const myCartList = state.cart.find(
      //   (item) => item.userId === product.userId
      // );
      console.log("carttttttt16", state.cart);
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        const allUserDetails =
          JSON.parse(localStorage.getItem("Userdetails")) || [];
        const updatedCart = state.cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              // userId: userId,
            };
          }
          return item;
        });
        // let allUserDetails = JSON.parse(localStorage.getItem("Userdetails"));

        // allUserDetails.forEach((userObject) => {
        //   userObject["Cart"] = updatedCart;
        // });

        // localStorage.setItem("cartdetails", JSON.stringify(allUserDetails));

        // console.log("Userdetails", product, updatedCart, allUserDetails);
        allUserDetails.forEach((userObject) => {
          if (!userObject["Cart"]) {
            userObject["Cart"] = [];
          }
          userObject["Cart"].push(updatedCart);
        });

        localStorage.setItem("Userdetails", JSON.stringify(allUserDetails));

        console.log("Userdetails", product, updatedCart, allUserDetails);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
        localStorage.setItem("Userdetails", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }

    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("Userdetails", JSON.stringify(updatedCart));
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

    default:
      return state;
  }
};

export default cartReducer;
