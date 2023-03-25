import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import SpeciesComponent from "@/src/components/species";

function Species() {
  return (
    <div>
      <Head>
        <title>Species || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <DashboardLayout>
        <SpeciesComponent />
      </DashboardLayout>
    </div>
  );
}

export default Species;
