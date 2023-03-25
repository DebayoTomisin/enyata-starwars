import React from "react";
import Head from "next/head";
import Layout from "@/src/components/layouts";
import StarShip from "@/src/components/starships/starship";

function Spaceship() {
  return (
    <div>
      <Head>
        <title>StarShips || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <Layout>
        <StarShip />
      </Layout>
    </div>
  );
}

export default Spaceship;
