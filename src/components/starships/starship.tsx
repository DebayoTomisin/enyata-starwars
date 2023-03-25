import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getStarship } from "@/src/api";

function StarShip() {
  const router = useRouter();

  const query = router.query?.spid;

  const { data, error, isLoading } = getStarship(query);

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="text-red-600 text-lg font-semibold">
        An Error occured performing this action please refresh your page...
      </div>
    );

  return (
    <div className="overview__info">
      <Image alt="cover" src="/assets/starship.png" width="300" height="300" />
      <div className="overview__desc">
        <h1 className="overview__title">{data?.name}</h1>
        <h1 className="overview__text">{`Model: ${data?.model}`}</h1>
        <h1 className="overview__text">{`Passengers: ${data?.passengers}`}</h1>
        <h1 className="overview__text">{`Pilots: ${data?.pilots}`}</h1>
      </div>
    </div>
  );
}

export default StarShip;
