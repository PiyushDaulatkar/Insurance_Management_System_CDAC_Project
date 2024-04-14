import * as Yup from "yup";

export const healthFormSchema = Yup.object({
    diseases: Yup.string().required("Please enter diseases"),
    age: Yup.number().required("Please enter age"),
    gender:Yup.string().required("Please enter gender") 
});