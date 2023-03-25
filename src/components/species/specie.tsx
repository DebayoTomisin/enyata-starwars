import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getSpecie } from "@/src/api";

function Specie() {
  const router = useRouter();

  const query = router.query?.sid;

  const { data, error, isLoading } = getSpecie(query);

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="text-red-600 text-lg font-semibold">
        An Error occured performing this action please refresh your page...
      </div>
    );

  return (
    <div className="overview__info">
      <Image alt="cover" src="/assets/specie.png" width="300" height="300" />
      <div className="overview__desc">
        <h1 className="overview__title">{data?.name}</h1>
        <h1 className="overview__text">{`Designation: ${data?.designation}`}</h1>
        <h1 className="overview__text">{`Language: ${data?.language}`}</h1>
        <h1 className="overview__text">{`Eye Colors: ${data?.eye_colors}`}</h1>
        <h1 className="overview__text">{`Average Lifespan: ${data?.average_lifespan}`}</h1>
      </div>
    </div>
  );
}

export default Specie;
