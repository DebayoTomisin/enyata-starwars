import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import PersonComponent from "@/src/components/people/person"

function Person() {
  return (
    <div>
      <Head>
        <title>Person ||Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <DashboardLayout>
        <PersonComponent />
      </DashboardLayout>
    </div>
  );
}

export default Person;
