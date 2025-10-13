// config.ts
import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{7,15}$/, "Enter a valid phone number")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});
