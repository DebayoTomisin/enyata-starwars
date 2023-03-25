import React from "react";
import Head from "next/head";
import Layout from "@/src/components/layouts";
import PeopleComponent from "@/src/components/people";

function People() {
  return (
    <div>
      <Head>
        <title>People || Starwars </title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <Layout>
        <PeopleComponent />
      </Layout>
    </div>
  );
}

export default People;
