import React, { useEffect, useState } from "react";
import { RxSwitch } from "react-icons/rx";
import { BsBasketFill, BsSun, BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { seacrhAction } from "../redux/actions/search";

const Navbar = () => {
  const [color, setColor] = useState(false); //theme mode
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);

  useEffect(() => {
    //her tıklamada ekran theme kontrol etmek için
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);

  const searchPost = (e) => {
    if (e.key === "Enter") {
      dispatch(seacrhAction(search));
    }
  };

  return (
    <div className="flex items-center justify-between px-3 h-20">
      <div className="text-2xl font-bold tracking-wider">LOGO</div>
      <div className="flex items-center space-x-4">
        <input
          value={search}
          onKeyPress={searchPost}
          onChange={(e) => setSearch(e.target.value)}
          className="border outline-none p-2 rounded-lg"
          placeholder="Search"
          type="text"
        />
        <div onClick={() => setColor(!color)}>
          {color ? <BsFillMoonFill size={21} className="cursor-pointer" /> : <BsSun size={22} className="cursor-pointer" />}
        </div>
        <div onClick={() => dispatch({ type: "DRAWER", payload: true })} className="relative">
          <BsBasketFill size={23} className="cursor-pointer" />
          <span className="absolute -top-1.5 -right-1.5 px-1.5 bg-red-600 text-white rounded-full text-xs">{cardItems?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
