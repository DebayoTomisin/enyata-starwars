import React from "react";
import Image from "next/image";
import Nav from "@/components/svgs/Navbar";

function MobileHeader() {
  return (
    <div className="flex justify-between bg-default p-3 w-full shadow-custom h-16 fixed z-10 top-0">
      <Image src="/assets/logo.svg" alt="logo" width={107} height={46} />
      <button>
        <Nav />
      </button>
    </div>
  );
}

export default MobileHeader;
