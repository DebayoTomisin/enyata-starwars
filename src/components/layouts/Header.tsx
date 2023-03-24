import React from "react";
import BellIcon from "../svgs/BellSvg";
import AccountSvg from "../svgs/AccountSvg";
import ThreeDots from "../svgs/ThreeDotSvg";
import ArrowRightSvg from "../svgs/ArrowRight";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const email = Cookies.get("email");

  function goBack() {
    router.back();
  }

  return (
    <div className="header">
      <div className="content">
        {Object.keys(router.query).length !== 0 && (
          <div
            onClick={() => goBack()}
            className="flex cursor-pointer items-center text-pry-grey3 space-x-3"
          >
            <ArrowRightSvg />
            <span>Back</span>
          </div>
        )}

        <div className="right">
          <div className="pr-6 border-r-1 border-[#E5E5E5]">
            <BellIcon />
          </div>

          <div className="flex space-x-4 items-center">
            <AccountSvg />
            <span className="text-pry-indigo text-[15px] leading-[18px] font-normal">
              Judah
            </span>
          </div>
          <ThreeDots />
        </div>
      </div>
    </div>
  );
}

export default Header;
