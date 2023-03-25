import React, { useState } from "react";
import MobileHeader from "./MobileHeader";
import Routes from "./Routes";
import Image from "next/image";
import Nav from "@/components/svgs/Navbar";

type mobileLayoutProps = {
  children: React.ReactNode;
};
function MobileNav({ children }: mobileLayoutProps) {
  const [openNav, setOpenNav] = useState(false);



  function handleNav() {
    setOpenNav((prevValue) => !prevValue);
  }

  return (
    <div className="">
      <div className="flex justify-between bg-default p-3 w-full shadow-custom h-16 fixed z-10 top-0">
        <Image src="/assets/logo.svg" alt="logo" width={107} height={46} />
        <button onClick={() => handleNav()}>
          <Nav />
        </button>
      </div>

      {openNav && (
        <div
          className={`mobile-sidebar ${
            openNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="container">
            <Routes />
            {/* <div className="content">
              
            </div> */}
          </div>
        </div>
      )}

      <div className="mt-20 px-5">{children}</div>
    </div>
  );
}

export default MobileNav;
