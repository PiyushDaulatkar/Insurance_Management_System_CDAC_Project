import 'bootstrap/dist/css/bootstrap.css';
// import health from './travel.png'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { healthFormSchema } from "./HealthFormValidaiton";
import { useAuth } from '../../Context/Auth';
import { useEffect } from 'react';
import health from './health.png'

const initialValues = {
    diseases: "",
    age: "",
    gender: ""
};
function HealthForm() {
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
            validationSchema: healthFormSchema,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
                window.localStorage.setItem("healthForm", JSON.stringify(values));
                action.resetForm();
                navigate("/healthinsurance");
            }
        });
    return (
        <div className="container" style={{ maxWidth: '1000px', marginTop: '20px' }}>
            <div className="container">
                <div className="container">
                    <div className="container" style={{ borderRadius: "1rem" }}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img
                                    src={health}
                                    alt="login form"
                                    className="img-fluid"
                                    style={{ borderRadius: "1rem 0 0 1rem" ,marginTop:'100px'}}
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
                                            <span className="h1 fw-bold mb-0">Buy Health Insurance!</span>
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
                                                name="diseases"
                                                value={values.diseases}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example17">
                                                Diseases
                                            </label>
                                            {errors.diseases && touched.diseases ? (
                                                <p className="form-error">{errors.diseases}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                id="form2Example17"
                                                className="form-control form-control-lg"
                                                name="age"
                                                value={values.age}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example17">
                                                Age
                                            </label>
                                            {errors.age && touched.age ? (
                                                <p className="form-error">{errors.age}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <select className="form-control form-control-lg"
                                                name="gender"
                                                value={values.gender}
                                                onChange={handleChange}
                                            >
                                                <option value="">Choose</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <label className="form-label" htmlFor="form2Example27">
                                                Gender
                                            </label>
                                            {errors.gender && touched.gender ? (
                                                <p className="form-error">{errors.gender}</p>
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
    );
}

export default HealthForm;