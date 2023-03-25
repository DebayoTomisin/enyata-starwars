import React from "react";
import BellIcon from "../svgs/BellSvg";
import AccountSvg from "../svgs/AccountSvg";
import ThreeDots from "../svgs/ThreeDotSvg";
import ArrowRightSvg from "../svgs/ArrowRight";
import { useStore } from "@/src/context/store";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  const {email} = useStore()
  return (
    <div className="header">
      <div className="content">
        {Object.keys(router.query).length !== 0 && (
          <div
            onClick={() => goBack()}
            className="flex cursor-pointer items-center text-pry-grey3 space-x-2"
          >
            <ArrowRightSvg />
            <span className="text-base">Back</span>
          </div>
        )}
        <div className="right">
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
    </div>
  );
}

export default Header;
