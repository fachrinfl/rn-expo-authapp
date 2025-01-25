import * as yup from "yup";

const getRequiredMessage = (field: string) => `${field} is required`;

export const loginValidationSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required(getRequiredMessage("Email")),
    password: yup.string().required(getRequiredMessage("Password")),
  });

export interface LoginFormValues {
  email: string;
  password: string;
}

export const loginInitialValues: LoginFormValues = {
  email: "",
  password: "",
};
