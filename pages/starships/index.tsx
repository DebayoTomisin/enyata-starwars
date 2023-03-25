import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import StarshipsComponent from "@/src/components/starships";

function Spaceships() {
  return (
    <div>
      <Head>
        <title>StarShips || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <DashboardLayout>
        <StarshipsComponent />
      </DashboardLayout>
    </div>
  );
}

export default Spaceships;
