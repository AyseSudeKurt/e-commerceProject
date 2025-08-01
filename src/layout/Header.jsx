import React from "react";
import { Mail, Phone, ChevronDown, Search, ShoppingCart, Heart, UserRound } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-[1439px] h-[852px] bg-white">
      <div className="w-[1439px] h-[58px] bg-dark-blue bg-navbar-dark">

      </div>

      <div className="w-[1439px] h-[136px]  top-[70px]  flex ">

        <div className="w-[187px] h-[58px] ml-[38px] mt-[13px] ">
          <h3 className="w-[108px] h-[32px] top-[13px] font-montserrat font-bold text-2xl	leading-8	tracking-[0.1px] text-[#252B42]">Bandage</h3>
        </div>

        <div className="w-[1155px] h-[58px] ml-[75px] pt-[18px]">
          <ul className="w-[361px] h-[25px] gap-[15px] font-montserrat font-bold text-sm	tracking-wide text-[#737373] flex">
            <li className="w-[43px] h-[24px]">Home</li>
            <div className="w-[63px] h-[25px] flex items-center items-baseline	">
              <li className="w-[38px] h-[28px] left-1.5">Shop</li>
              <ChevronDown className="w-[20px] h-[10px] left-[53px] top-2.5	" />
            </div>
            <li className="w-[45px] h-[24px]">About</li>
            <li className="w-[33px] h-[24px]">Blog</li>
            <li className="w-[58px] h-[24px]">Contact</li>
            <li className="w-[44px] h-[24px]">Pages</li>
          </ul>


          <ul className="w-[324px] h-[54px] flex left-[832px] ml-[832px] mt-[-30px]">

            <li className="w-[166px] h-[54px] flex items-center justify-center">
              <button className="w-full h-full bg-white flex items-center gap-2 text-main-blue mt-[-15px]">
                <UserRound className="w-[16px] h-[16px]" />
                <p className="font-montserrat font-bold text-xs ">Login / Register</p>
              </button>
            </li>

            <li className="w-[46px] h-[46px] text-main-blue ">
              <button className="bg-white">
                <Search className="w-[16px] h-[16px] top-0" />
              </button>
            </li>

            <li className="w-[56px] h-[46px] text-main-blue">
              <button className="bg-white flex">
                <ShoppingCart className="w-[16px] h-[16px]" />
                <p className="w-[5px] h-[16px]text-main-blue font-montserrat font-normal	text-xs	tracking-[0.2px]">1</p>
              </button>
            </li>

            <li className="w-[56px] h-[46px] text-main-blue">
              <button className=" bg-white flex">
                <Heart className="w-[16px] h-[16px]" />
                <p className="w-[5px] h-[16px]text-main-blue font-montserrat font-normal	text-xs	tracking-[0.2px]">1</p>
              </button>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;
