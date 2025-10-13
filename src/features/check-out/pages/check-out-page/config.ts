// config.ts
import * as yup from "yup";

export const checkoutSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  companyName: yup.string().optional(),
  streetAddress: yup.string().required("Street address is required"),
  apartment: yup.string().optional(),
  city: yup.string().required("City is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{7,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});
