import * as Yup from "yup";

export const travelFormSchema = Yup.object({
    Destination: Yup.string().required("Please enter destination"),
    duration: Yup.number().required("Please enter duration"),
    noOfTravlers:Yup.number().required("Please enter number of traverlers") 
});