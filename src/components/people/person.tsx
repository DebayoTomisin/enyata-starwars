import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getPerson } from "@/src/api";

function Person() {
  const router = useRouter();

  const query = router.query?.id;

  const { data, error, isLoading } = getPerson(query);


  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="text-red-600 text-lg font-semibold">
        An Error occured performing this action please refresh your page...
      </div>
    );

  return (
    <div className="overview__info">
      <Image alt="cover" src="/assets/people.png" width="300" height="300" />
      <div className="overview__desc">
        <h1 className="overview__title">{data?.name}</h1>
        <h1 className="overview__text">{`Gender: ${data?.gender}`}</h1>
        <h1 className="overview__text">{`Year of Birth: ${data?.birthyear}`}</h1>
        <h1 className="overview__text">{`Skin Color: ${data?.skin_color}`}</h1>
        <h1 className="overview__text">{`Height: ${data?.height}CM`}</h1>
      </div>
    </div>
  );
}

export default Person;
