import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";

function Spaceships() {
  return (
    <div>
      <Head>
        <title>StarShips || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <DashboardLayout>
        <div>
          <span>Nothing to see here! but spaceships!</span>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Spaceships;
