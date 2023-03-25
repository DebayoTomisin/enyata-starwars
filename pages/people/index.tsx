import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import PeopleComponent from "@/src/components/people";

function People() {
  return (
    <div>
      <Head>
        <title>People || Starwars </title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <DashboardLayout>
        <PeopleComponent />
      </DashboardLayout>
    </div>
  );
}

export default People;
