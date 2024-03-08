import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "./";
import { useEffect, useState } from "react";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <>
      <header className="hidden sm:block">
        <div className="flex bg-amazonclone text-white h-[60px]">
          {/* Left */}
          <div className="flex items-center m-4">
            <Link to={"/"}>
              <img
                className="h-[35px] w-[100px] m-2"
                src={"../images/amazon.png"}
                alt="Amazon logo"
              />
            </Link>
            <div className="pr-4 pl-4">
              <div className="text-xs xl:text-sm">Deliver to</div>
              <div className="text-sm xl:text-base font-bold">Egypt</div>
            </div>
          </div>
          {/* Middle */}
          <div className="flex grow relative items-center">
            <Search />
          </div>
          {/* Right */}
          <div className="flex items-center m-2 lg:m-4">
            <div className="px-2 lg:px-4">
              <div className="text-xs xl:text-sm">Hello, sign in</div>
              <div className="text-xs xl:text-base font-bold">
                Accounts & Lists
              </div>
            </div>
            <div className="px-2 lg:px-4">
              <div className="text-xs xl:text-sm">Returns</div>
              <div className="text-xs xl:text-base font-bold">& Orders</div>
            </div>
            <Link to={"/checkout"}>
              <div className="flex px-2 lg:px-3">
                <ShoppingCartIcon className="h-[48px]" />
                <div className="relative">
                  <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                    {cart}
                  </div>
                </div>
                <div className="hidden lg:block mt-7 text-xs xl:text-sm font-bold">
                  Cart
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
          <div>Today's Deals</div>
          <div>Customer Service</div>
          <div>Registry</div>
          <div>Gift Cards</div>
          <div>Sell</div>
        </div>
      </header>
      <header className="sm:hidden">
        <div className="flex bg-amazonclone text-white h-[60px]">
          {/* Left */}
          <div className="flex items-center m-4">
            <Link to={"/"}>
              <img
                className="h-[35px] w-[100px] m-2 mt-8"
                src={"../images/amazon.png"}
                alt="Amazon logo"
              />
            </Link>
            <div className="pr-4 pl-4 hidden">
              <div className="text-xs xl:text-sm">Deliver to</div>
              <div className="text-sm xl:text-base font-bold">Egypt</div>
            </div>
          </div>

          {/* Right */}
          <div className="absolute right-0 flex items-center m-4">
            <div className="flex pr-4 pl-4">
              <div className="text-sm xl:text-sm font-bold "> Sign in</div>
              <div className="sm:hidden text-sm xl:text-base">
                <UserIcon className="h-[32px]" />
              </div>
            </div>
            <div className="hidden pr-4 pl-4">
              <div className=" text-xs xl:text-sm">Returns</div>
              <div className="text-sm xl:text-base font-bold">& Orders</div>
            </div>
            <Link to={"/checkout"}>
              <div className="flex pr-3 pl-3">
                <ShoppingCartIcon className="h-[48px]" />
                <div className="relative">
                  <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                    {cart}
                  </div>
                </div>
                <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
              </div>
            </Link>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center p-5 bg-amazonclone ">
          <Search />
        </div>
        <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
          <div>Today's Deals</div>
          <div>Customer Service</div>
          <div>Registry</div>
          <div>Gift Cards</div>
          <div>Sell</div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
