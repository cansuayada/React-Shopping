import React from "react";

const ProductsCards = ({ card }) => {
  //img komple render olmaması için resime tıklanınca idsi olanı yönlendiriyoruz yalnızca
  return (
    <div className="hover:border-indigo-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2">
      <img onClick={() => (window.location = `details/${card.id}`)} className="  h-32 object-cover" src={card?.image} alt="" />
      <div className="text-center font-bold h-16 mt-2">{(card?.title).substring(0, 40)}...</div>
      <div className="text-center opacity-70 text-sm">{(card?.description).substring(0, 50)}...</div>
      <div className=" font-bold text-lg">{card?.price} TL</div>
      <button className="w-full rounded-lg text-white bg-indigo-600 p-2">SEPETE EKLE</button>
    </div>
  );
};

export default ProductsCards;
