export const productCard = (state = { cardItems: [] }, action) => {
  switch (action.type) {
    //önceden eklenmişleri ürünler için ayrıştırma yapmamız gerekiyor
    case "ADD_CARD":
      const item = action.payload;
      const existItem = state.cardItems.find((x) => x.id === item.payload); // carditemsların içindeki id ile dışarıdan gelen idlerin eşitliğini kontrol etmek için
      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map((x) => (x.id === existItem.id ? item : x)), // carditems içinde id eşitse existitemin id item getir değilse dokunma
        };
      } else {
        //farklı bir ürün geldiğinde
        return {
          ...state,
          cardItems: [...state.cardItems, item],
        };
      }

    case "REMOVE_CARD":
      return {
        cardItems: state.cardItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
