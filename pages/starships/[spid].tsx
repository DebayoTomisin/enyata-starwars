import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";

function Spaceship() {
  return (
    <div>
      <Head>
        <title>StarShips || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <DashboardLayout>
        <div>This is a single spaceship</div>
      </DashboardLayout>
    </div>
  );
}

export default Spaceship;
