import * as Yup from "yup";

export const carFormSchema = Yup.object({
  carRegNo: Yup.string().required("Please enter registration number"),
  carType: Yup.string().required("Please enter car type"),
  regDate:Yup.date().required("Please enter registration date") 
  // email: Yup.string().email().required("Please enter your email"),
  // password: Yup.string().min(6).required("Please enter your password")
});