import Head from "next/head";
import Layout from "@/src/components/layouts";
import Overview from "@/src/components/overview";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Overview || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <Layout>
        <Overview />
      </Layout>
    </div>
  );
}
