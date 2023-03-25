import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import Specie from "@/src/components/species/specie"

function Species() {
  return (
    <div>
      <Head>
        <title>Species || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <DashboardLayout>
        <Specie />
      </DashboardLayout>
    </div>
  );
}

export default Species;
