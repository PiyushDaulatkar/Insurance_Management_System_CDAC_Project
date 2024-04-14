import 'bootstrap/dist/css/bootstrap.css';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { HomeFormSchema } from "./HomeFormValidation";
import home from './home.jpg'
import { useAuth } from '../../Context/Auth';
import { useEffect } from 'react';

const initialValues = {
    City: "",
    valueOfHome: "",
    valueOfHouseHoldItems: ""
};
function HomeForm() {
    const { isLoggedIn } = useAuth();
    useEffect(()=>{
        if(!isLoggedIn){
            navigate("/login");
            alert("please login first!");  
        }
    },[]);
    const navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: HomeFormSchema,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
                window.localStorage.setItem("homeForm", JSON.stringify(values));
                action.resetForm();
                navigate("/homeinsurance");
            }
        });
    return (<>
        <div className="container" style={{ maxWidth: '1000px', marginTop: '20px' }}>
            <div className="container">
                <div className="container">
                    <div className="container" style={{ borderRadius: "1rem" }}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img
                                    src={home}
                                    alt="login form"
                                    className="img-fluid"
                                    style={{ borderRadius: "1rem 0 0 1rem" ,marginTop:'70px'}}
                                />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center" >
                                <div className="card-body p-4 p-lg-5 text-black" >
                                    <form onSubmit={handleSubmit} >
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i
                                                className="fas fa-cubes fa-2x me-3"
                                                style={{ color: "#ff6219" }}
                                            />
                                            <span className="h1 fw-bold mb-0">Buy Home Insurance!</span>
                                        </div>
                                        <h5
                                            className="fw-normal mb-3 pb-3"
                                            style={{ letterSpacing: 1 }}
                                        >
                                            Please fill following details to continue
                                        </h5>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form2Example17"
                                                className="form-control form-control-lg"
                                                name="City"
                                                value={values.City}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example17">
                                                City
                                            </label>
                                            {errors.City && touched.City ? (
                                                <p className="form-error">{errors.City}</p>
                                            ) : null}
                                        </div>
                                       
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                id="form2Example27"
                                                className="form-control form-control-lg"
                                                // style={{ color: 'transparent' }}
                                                name="valueOfHome"
                                                value={values.valueOfHome}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                                value of your Home
                                            </label>
                                            {errors.valueOfHome && touched.valueOfHome ? (
                                                <p className="form-error">{errors.valueOfHome}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                id="form2Example27"
                                                className="form-control form-control-lg"
                                                // style={{ color: 'transparent' }}
                                                name="valueOfHouseHoldItems"
                                                value={values.valueOfHouseHoldItems}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                            value of Household Items
                                            </label>
                                            {errors.valueOfHouseHoldItems && touched.valueOfHouseHoldItems ? (
                                                <p className="form-error">{errors.valueOfHouseHoldItems}</p>
                                            ) : null}
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <button
                                                className="btn btn-dark btn-lg btn-block"
                                                type="submit"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default HomeForm;