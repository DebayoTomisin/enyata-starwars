import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Overview || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <DashboardLayout>
        <div>Omo Rapala!</div>
      </DashboardLayout>
    </div>
  );
}
