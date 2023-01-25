export const productDetails = (state = { product: {} }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_DETAILS":
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
