import React from "react";
import Head from "next/head";
import Layout from "@/src/components/layouts";
import SpeciesComponent from "@/src/components/species";

function Species() {
  return (
    <div>
      <Head>
        <title>Species || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <Layout>
        <SpeciesComponent />
      </Layout>
    </div>
  );
}

export default Species;
