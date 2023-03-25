import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getSingleFilm } from "@/src/api";

function Overview() {
  const router = useRouter();

  const query = router.query?.oid;

  const { data, error, isLoading } = getSingleFilm(query);

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div className="text-red-600 text-lg font-semibold">
        An Error occured performing this action please refresh your page...
      </div>
    );

  return (
    <div className="overview__info">
      <Image alt="cover" src="/assets/cover.jpg" width="300" height="300" />
      <div className="overview__desc">
        <h1 className="overview__title">{data?.title}</h1>
        <h1 className="overview__text">{`Director: ${data?.director}`}</h1>
        <h1 className="overview__text">{`Producer: ${data?.producer}`}</h1>
        <h1 className="overview__text">{`Release Date: ${dateFormatter.format(
          new Date(data?.release_date)
        )}`}</h1>
      </div>
    </div>
  );
}

export default Overview;
