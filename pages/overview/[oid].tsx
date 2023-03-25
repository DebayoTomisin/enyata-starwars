import React from "react";
import Head from "next/head";
import Layout from "@/layout/index";
import Overview from "@/src/components/overview/overview";

function FilmOverview() {
  return (
    <div>
      <Head>
        <title>Film || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <Layout>
        <Overview />
      </Layout>
    </div>
  );
}

export default FilmOverview;
