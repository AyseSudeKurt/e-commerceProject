import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, ChevronDown, Search, ShoppingCart, Heart, UserRound, ChevronLeft, ChevronRight } from 'lucide-react';


const Header = () => {

  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const imageCount = 2;

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imageCount);
  };

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


      <div className="relative  w-fit h-[716px] overflow-hidden border border-[#DEDEDE] rounded-[5px]">
        <div className="w-fit h-[716px] absolute z-10">
          <div className="w-[975px] h-[651px] top-[48px] left-[232px] pl-[112px] pb-[112px] gap-[80px]">
            <div className="w-[975px] h-[427px] pb-[48px] pt-[48px] gap-[30px]">
              <div className="w-[599px] h-[331px] gap-[35px]">
                <h5 className="text-white w-[142px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] mt-[150px] flex flex-nowrap">SUMMER 2020</h5>
                <br></br>
                <br></br>
                <h1 className="text-white w-[700px] h-[80px] font-montserrat font-bold text-6xl	tracking-[0.2px]">NEW COLLECTION</h1>
                <br></br>
                <br></br>
                <h4 className="text-white w-[376px] h-[60px] font-montserrat font-normal text-xl tracking-[0.2px]">We know how large objects will act,<br></br>but things on a small scale.</h4>
                <br></br>
                <button className="w-[221px] h-[62px] border-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] bg-[#2DC071] border-none">
                  <h3 className="w-[190px] h-[32px] text-white font-montserrat font-bold text-2xl	tracking-[0.1px] flex">SHOP NOW</h3>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div ref={carouselRef} className="flex transition-transform duration-500">
          <img src="/images/carousel.jpg" className="w-full flex-shrink-0 object-cover"></img>
          <img src="/images/carousel2.jpg" className="w-full flex-shrink-0 object-cover"></img>
        </div>

        <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2  p-2 ">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2  p-2 ">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>


      </div>

    </header>
  );
};

export default Header;   