import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*.,])(?=.{8,})/,
      "Password must contain at least 8 characters, one uppercase, one number and one special character"
    )
    .required("Please Input your password"),
});
