import * as Yup from "yup";

// City: "",
//     valueOfHome: "",
//     valueOfHouseHoldItems: ""
export const HomeFormSchema = Yup.object({
    City: Yup.string().required("Please enter city"),
    valueOfHome: Yup.number().required("Please enter value of your home in rupees"),
    valueOfHouseHoldItems:Yup.number().required("Please enter value of your household items in rupees")
});