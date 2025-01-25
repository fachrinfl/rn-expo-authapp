import { useField } from "formik";
import React from "react";
import InputField, { InputFieldProps } from "./InputField";

interface FormikInputFieldProps
  extends Omit<
    InputFieldProps,
    "onChangeText" | "onBlur" | "value" | "errorMessage"
  > {
  name: string;
}

const FormikInputField: React.FC<FormikInputFieldProps> = ({
  name,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <InputField
      {...props}
      value={field.value}
      onChangeText={field.onChange(name)}
      onBlur={field.onBlur(name)}
      errorMessage={meta.touched && meta.error ? meta.error : undefined}
    />
  );
};

export default FormikInputField;
