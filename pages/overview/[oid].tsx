import React from "react";
import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import Overview from "@/src/components/overview/overview";

function FilmOverview() {
  return (
    <div>
      <Head>
        <title>Film || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <DashboardLayout>
        <Overview />
      </DashboardLayout>
    </div>
  );
}

export default FilmOverview;
