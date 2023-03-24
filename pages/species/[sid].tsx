import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";

function Species() {
  return (
    <div>
      <Head>
        <title>Species || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <DashboardLayout>
        <div>this is type of species</div>
      </DashboardLayout>
    </div>
  );
}

export default Species;
