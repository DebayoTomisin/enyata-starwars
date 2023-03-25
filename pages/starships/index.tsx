import React from "react";
import Head from "next/head";
import Layout from "@/src/components/layouts";
import StarshipsComponent from "@/src/components/starships";

function Spaceships() {
  return (
    <div>
      <Head>
        <title>StarShips || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <Layout>
        <StarshipsComponent />
      </Layout>
    </div>
  );
}

export default Spaceships;
