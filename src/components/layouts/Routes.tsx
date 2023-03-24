import React from "react";
import Link from "next/link";
import OverviewIcon from "@/svg/OverviewSvg";
import StarshipSvg from "../svgs/StarshipSvg";
import PeopleSvg from "../svgs/PeopleSvg";
import SpeciesSvg from "../svgs/SpeciesSvg";
import { useRouter } from "next/router";

function Routes() {
  const { route } = useRouter();

  return (
    <div className="routes">
      <Link href="/">
        <div className={`${route === "/" ? "active__route" : ""} route mb-16`}>
          <OverviewIcon />

          <h2 className="routeText">Overview</h2>
        </div>
      </Link>

      <div className="grid gap-y-6">
        <Link href="/starships">
          <div
            className={`${
              route.includes("starships") ? "active__route" : ""
            } route `}
          >
            <StarshipSvg />

            <h2 className="routeText">Starships</h2>
          </div>
        </Link>

        <Link href="/people">
          <div
            className={`${
              route.includes("people") ? "active__route" : ""
            } route `}
          >
            <PeopleSvg />

            <h2 className="routeText">People</h2>
          </div>
        </Link>
        <Link href="/species">
          <div
            className={`${
              route.includes("species") ? "active__route" : ""
            } route `}
          >
            <SpeciesSvg />

            <h2 className="routeText">Species</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Routes;
