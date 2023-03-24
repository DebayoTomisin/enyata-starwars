import React from "react";
import Image from "next/image";

function Overview() {
  return (
    <div className="overview__info">
      <Image alt="cover" src="/assets/cover.jpg" width="300" height="300" />
      <div className="overview__desc">
        <h1 className="overview__title">COVER</h1>
        <h1 className="overview__text">Director: Kingsley Omin</h1>
        <h1 className="overview__text">Producer: Kingsley Omin</h1>
        <h1 className="overview__text">Release Date: January 24, 2022</h1>
      </div>
    </div>
  );
}

export default Overview;
