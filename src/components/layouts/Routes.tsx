import React from "react";
import Link from "next/link";
import OverviewIcon from "@/svg/OverviewSvg";
import StarshipSvg from "../svgs/StarshipSvg";
import PeopleSvg from "../svgs/PeopleSvg";
import SpeciesSvg from "../svgs/SpeciesSvg";
import { useRouter } from "next/router";

function Routes() {
  const { pathname } = useRouter();

  return (
    <div className="routes">
      <Link href="/">
        <div
          className={`${pathname === "/" ? "active__route" : ""} route mb-16`}
        >
          <OverviewIcon />

          <h2 className="text-sm text-white font-semibold">OverView</h2>
        </div>
      </Link>

      <div className="grid gap-y-6">
        <Link href="/starships">
          <div
            className={`${
              pathname === "/starships" ? "active__route" : ""
            } route `}
          >
            <StarshipSvg />

            <h2 className="text-sm text-white font-semibold">Starships</h2>
          </div>
        </Link>

        <Link href="/people">
          <div
            className={`${
              pathname === "/people" ? "active__route" : ""
            } route `}
          >
            <PeopleSvg />

            <h2 className="text-sm text-white font-semibold">People</h2>
          </div>
        </Link>
        <Link href="/species">
          <div
            className={`${
              pathname === "/species" ? "active__route" : ""
            } route `}
          >
            <SpeciesSvg />

            <h2 className="text-sm text-white font-semibold">Species</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Routes;
