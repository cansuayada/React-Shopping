export const cardActions = (id, quantity) => async (dispatch, getState) => {
  //sepete eklemek için
  // dışarıdan id alarak api sonuna idyi vererek ilgili productı dönüyor
  const response = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
  dispatch({
    type: "ADD_CARD",
    payload: {
      id: response.id,
      image: response.image,
      title: response.title,
      decs: response.description,
      price: response.price,
      qty: quantity,
    },
  });
  //storedan cardı getstate ile alarak localStorageye set ediyoruz
  const {
    card: { cardItems },
  } = getState();
  localStorage.setItem("cardItems", JSON.stringify(cardItems));
};

export const removeCard = (productId) => (dispatch, getState) => {
  //sepetten silmek için
  dispatch({ type: "REMOVE_CARD", payload: productId });

  const {
    card: { cardItems },
  } = getState();
  localStorage.setItem("cardItems", JSON.stringify(cardItems));
};
