import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, ChevronDown, Search, ShoppingCart, Heart, UserRound, ChevronLeft, ChevronRight } from 'lucide-react';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { NavLink } from "react-router-dom";

import ShopPage from './pages/ShopPage';


const Header = () => {



  return (
    <header className="w-full bg-white">

      <div className="w-full h-[58px] bg-dark-blue bg-navbar-dark"></div>


      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-6">

        <div>
          <h3 className="font-montserrat font-bold text-2xl text-[#252B42]">Bandage</h3>
        </div>


        <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto justify-between lg:justify-normal gap-96">

          <ul className="flex gap-4 font-montserrat font-bold text-sm text-[#737373] align-baseline">
            <li><a href="/">Home</a></li>
            <Menu as="div" className="relative inline-block">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Shop
                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>

              <MenuItems
                transition
                className=" flex flex-row  absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/shop"
                      className="font-bold block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Kadın
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Bags
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Belts
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Cosmetics
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Bags
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        Hats
                      </button>
                    </MenuItem>
                  </form>
                </div>

                <div className="py-1 flex flex-col">
                  <MenuItem>
                    <a
                      href="/shop"
                      className="font-bold block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Erkek
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Bags
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Belts
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Cosmetics
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/shop"
                      className="block px-4 py-2 text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Bags
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-[#737373] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        Hats
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
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




    </header>
  );
};

export default Header;   