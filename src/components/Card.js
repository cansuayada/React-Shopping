import React from "react";
import { CgCloseO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../redux/actions/card";

const Card = () => {
  //reducerda type drawer olan true oldugunda false yapmak için
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  console.log("card", cardItems);

  const deleteCard = (id) => {
    dispatch(removeCard(id));
  };
  return (
    <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
      <div className="flex items-center h-20 justify-between">
        <h1 className="text-2xl ">SEPETİM:</h1>
        <CgCloseO onClick={() => dispatch({ type: "DRAWER", payload: false })} size={23} className="cursor-pointer" />
      </div>

      {cardItems?.map((card, i) => (
        <div className="h-24 flex justify-between items-center mt-5" key={i}>
          <img className="h-24" src={card?.image} alt="" />
          <div className="w-44">
            <div className="font-bold text-sm">
              {card?.title} ({card?.qty})
            </div>
            <div className="opacity-60 text-sm">{(card?.decs).substring(0, 45)}</div>
          </div>
          <div className="font-bold text-lg">{card?.price} TL</div>
          <div onClick={() => deleteCard(card.id)} className="bg-red-500 rounded-lg text-white text-lg text-center cursor-pointer w-20 p-1">
            Sil
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

/**
 * 
 

 */
