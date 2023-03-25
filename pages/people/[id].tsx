import React from "react";
import Head from "next/head";
import Layout from "@/layout/index";
import PersonComponent from "@/src/components/people/person";

function Person() {
  return (
    <div>
      <Head>
        <title>Person ||Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <Layout>
        <PersonComponent />
      </Layout>
    </div>
  );
}

export default Person;
