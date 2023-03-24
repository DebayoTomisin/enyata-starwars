import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";

function Person() {
  return (
    <div>
      <Head>
        <title>Peerson ||Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <DashboardLayout>
        <div>This is a single individual!</div>
      </DashboardLayout>
    </div>
  );
}

export default Person;
