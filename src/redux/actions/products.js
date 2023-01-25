export const productActions = () => async (dispatch) => {
  //apiden ürünleri çekmek için
  const response = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
  dispatch({ type: "GET_PRODUCTS", payload: response });
};

export const detailActions = (id) => async (dispatch) => {
  // dışarıdan id alarak api sonuna idyi vererek ilgili productı dönüyor
  const response = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
  dispatch({ type: "GET_PRODUCTS_DETAILS", payload: response });
};
