import React from "react";
import { Mail, Phone, ChevronDown, Search, ShoppingCart, Heart, UserRound, ChevronLeft } from 'lucide-react';


const Header = () => {

  return (
    <header className="w-full bg-white">

      <div className="w-full h-[58px] bg-dark-blue bg-navbar-dark"></div>


      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-6">

        <div>
          <h3 className="font-montserrat font-bold text-2xl text-[#252B42]">Bandage</h3>
        </div>


        <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto justify-between lg:justify-normal gap-96">

          <ul className="flex gap-4 font-montserrat font-bold text-sm text-[#737373]">
            <li>Home</li>
            <li className="flex items-center gap-1">Shop <ChevronDown className="w-4 h-4" /></li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>


          <ul className="flex items-center gap-4">
            <li>
              <button className="flex items-center gap-1 text-main-blue">
                <UserRound className="w-4 h-4" />
                <p className="font-montserrat font-bold text-xs">Login / Register</p>
              </button>
            </li>
            <li><Search className="w-4 h-4 text-main-blue" /></li>
            <li className="flex items-center gap-1 text-main-blue">
              <ShoppingCart className="w-4 h-4" />
              <p className="text-xs">1</p>
            </li>
            <li className="flex items-center gap-1 text-main-blue">
              <Heart className="w-4 h-4" />
              <p className="text-xs">1</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full h-[716px] border border-[#DEDEDE] bg-carousel bg-cover rounded-[5px]">
        <div className="w-[975px] h-[651px] top-12	left-[232px] py-28 gap-20">
          <div className="w-[599px] h-[331px] gap-[35px]">
            <h5 className="w-[122px] h-[24px] font-montserrat font-bold text-white pl-[232px] flex flex-row	text-nowrap	text-base	">SUMMER 2020</h5>
            <h1 className="font-montserrat w-[548px] h-[80px] font-bold text-[58px] leading-[80px] tracking-[0.2px] flex flex-row	text-nowrap pl-[232px] text-white pt-12">NEW COLLECTION</h1>
            <h4 className="w-[376px] h-[60px] font-montserrat font-normal	text-xl	tracking-[0.2px] text-white pl-[232px] pt-36 flex text-nowrap	">We know how large objects will act,<br class="hidden sm:inline" />but things on a small scale.</h4>
            <div className="w-[221px] h-[62px] gap-2.5 pl-[232px] pt-40">
              <button className="w-[221px] h-[62px] rounded-[5px] pt-3.5	pb-3.5	pr-10	pl-10	bg-[#2DC071]">
                <h3 className="text-white font-montserrat font-bold text-2xl flex text-nowrap">SHOP NOW</h3>
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;   