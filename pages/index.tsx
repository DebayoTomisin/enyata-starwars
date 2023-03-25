import Head from "next/head";
import DashboardLayout from "@/src/components/layouts/DashboardLayout";
import Overview from "@/src/components/overview";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Overview || Starwars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <DashboardLayout>
        <Overview />
      </DashboardLayout>
    </div>
  );
}
