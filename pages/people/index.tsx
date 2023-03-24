import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";

function People() {
  return (
    <div>
      <Head>
        <title>People || Starwars </title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <DashboardLayout>
        <span>This is the people's page ladies and gentlemen!</span>
      </DashboardLayout>
    </div>
  );
}

export default People;
