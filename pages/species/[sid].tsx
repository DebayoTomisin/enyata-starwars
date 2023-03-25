import React from "react";
import Head from "next/head";
import Layout from "@/src/components/layouts";
import Specie from "@/src/components/species/specie";

function Species() {
  return (
    <div>
      <Head>
        <title>Species || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <Layout>
        <Specie />
      </Layout>
    </div>
  );
}

export default Species;
