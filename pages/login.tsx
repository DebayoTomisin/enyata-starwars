import LoginComponent from "@/components/auth";
import AuthLayout from "@/components/layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <LoginComponent />
    </AuthLayout>
  );
}

export default Login;
