import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsCards from "../components/ProductsCards";
import { productActions } from "../redux/actions/products";
import { seacrhAction } from "../redux/actions/search";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { search } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions());
    dispatch(seacrhAction());
  }, [dispatch]);

  //eğer search sıfırdan büyükse filtreyi göster değilse ürünleri
  return (
    <div className="flex flex-wrap justify-center">
      {search.length > 0
        ? search.map((card, i) => <ProductsCards key={i} card={card} />)
        : products && products.map((card, i) => <ProductsCards key={i} card={card} />)}
    </div>
  );
};

export default Home;
