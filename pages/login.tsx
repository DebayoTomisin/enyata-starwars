import Head from "next/head";
import LoginComponent from "@/components/auth";
import AuthLayout from "@/components/layouts/AuthLayout";

function Login() {
  return (
    <div>
      <Head>
        <title>Login || StarWars</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <AuthLayout>
        <LoginComponent />
      </AuthLayout>
    </div>
  );
}

export default Login;
