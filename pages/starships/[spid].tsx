import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import StarShip from "@/src/components/starships/starship";

function Spaceship() {
  return (
    <div>
      <Head>
        <title>StarShips || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <DashboardLayout>
        <StarShip />
      </DashboardLayout>
    </div>
  );
}

export default Spaceship;
