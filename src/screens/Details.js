import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailActions } from "../redux/actions/products";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { cardActions } from "../redux/actions/card";

const Details = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  console.log("product", product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailActions(id));
  }, [dispatch]);

  const increment = (stock) => {
    //stock varsa count stocktan küçükse artır
    if (count <= stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    //count sıfırdan büyükse azalt
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addCard = () => {
    dispatch(cardActions(id, count));
    //drawer menü otomatik açılması için
    dispatch({ type: "DRAWER", payload: true });
  };

  return (
    <div className="w-full flex items-center justify-center space-x-5">
      <img className="w-1/5" src={product?.image} alt="" />
      <div className="w-2/3 space-y-5">
        <div className="font-bold text-xl">{product?.title}</div>
        <div className="opacity-60">{product?.description}</div>
        <div className="opacity-60">Category: {product?.category}</div>
        <div className="opacity-60">
          Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}
        </div>
        <div className="font-bold  text-xl">Fiyat: {product?.price}</div>

        <div className="flex items-center space-x-4">
          <CgMathMinus onClick={decrement} className="cursor-pointer border-rounded-full p-1" size={25} />
          <span className="text-xl">{count}</span>
          <CgMathPlus onClick={() => increment(product?.rating?.count)} className="cursor-pointer border-rounded-full p-1" size={25} />
        </div>
        <button onClick={addCard} className="p-2 text-center rounded-lg text-white text-lg bg-indigo-600 w-full">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Details;
