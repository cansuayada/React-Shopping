import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { drawerReducer } from "./reducers/drawer";
import { productReducer } from "./reducers/products";
import { productDetails } from "./reducers/productDetails";
import { productCard } from "./reducers/card";
import { searchReducer } from "./reducers/search";

const cardItems = JSON.parse(localStorage.getItem("cardItems")) || []; //sepete eklenen ürünler varsa getir yoksa boş arr dön

const initialState = {
  //cardların başlangıç durumu
  card: { cardItems },
};

const reducers = combineReducers({
  //drawer açılan kapanan reducer
  //product apiden gelen ürülerin reducerı
  drawer: drawerReducer,
  products: productReducer,
  product: productDetails,
  card: productCard,
  search: searchReducer,
});

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
