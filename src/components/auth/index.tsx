import React from "react";
import Button from "../reusable/Button";
import InputField from "../reusable/InputField";
import { useFormik } from "formik";
import { loginSchema } from "@/src/schema";
import { useLogin } from "@/src/hooks/useLogin";

function LoginComponent() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      useLogin(values.email);
    },
  });

  return (
    <div className="login__card">
      <div className="login__text">
        <h1>Login</h1>
        <p>Kindly enter your details to log in</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="form">
        <div>
          <InputField
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email Address"
            type="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error__message">{formik.errors.email}</span>
          ) : null}
        </div>

        <div>
          <InputField
            placeholder="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="error__message">{formik.errors.password}</span>
          ) : null}
        </div>

        <div>
          <Button type="submit" value="Login" />
        </div>
      </form>

      <h1 className="forgot__password">Forgot Password</h1>

      <div className="privacy__service">
        <span className="policy">Privacy Policy</span>
        <span className="text-[#B0B9C8] text-sm"> and </span>
        <span className="policy"> Terms of service</span>
      </div>
    </div>
  );
}

export default LoginComponent;
