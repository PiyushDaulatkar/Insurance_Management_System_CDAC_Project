import * as Yup from "yup";

export const ValSchema = Yup.object({
    idvCover: Yup.number().required("Please enter cover"),
    premium: Yup.number().required("Please enter premium"),
    claimsSettled:Yup.string().required("Please enter claim settled %"),
    addOns:Yup.string().required("Please enter details")
});