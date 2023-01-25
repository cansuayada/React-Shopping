export const seacrhAction = (keyword) => async (dispatch) => {
  //search için gelen keywordu içeriklere gösre filtreliyoruz

  const response = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
  dispatch({
    type: "SEARCH",
    payload: response.filter((data) => data.title.includes(keyword) || data.description.includes(keyword) || data.category.includes(keyword)),
  });
};
