import React from "react";
import BellIcon from "../svgs/BellSvg";
import AccountSvg from "../svgs/AccountSvg";
import ThreeDots from "../svgs/ThreeDotSvg";
import Cookies from "js-cookie";

function Header() {
  const email = Cookies.get("email");
  return (
    <div className="header">
      <div className="content">
        <div className="pr-6 border-r-1 border-[#E5E5E5]">
          <BellIcon />
        </div>

        <div className="flex space-x-4 items-center">
          <AccountSvg />
          <span className="text-pry-indigo text-[15px] leading-[18px] font-normal">
            {email}
          </span>
        </div>
        <ThreeDots />
      </div>
    </div>
  );
}

export default Header;
