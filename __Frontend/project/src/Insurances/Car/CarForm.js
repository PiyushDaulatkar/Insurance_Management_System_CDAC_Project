// import "./CarForm.css";
import 'bootstrap/dist/css/bootstrap.css';
import car from './car.jpeg'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { carFormSchema } from "./CarFormValidation";
import { useAuth } from '../../Context/Auth';
import { useState, useEffect } from "react";


const initialValues = {
    carRegNo: "",
    carType: "",
    regDate: ""
};

function CarForm() {
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
            validationSchema: carFormSchema,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
                window.localStorage.setItem("carForm", JSON.stringify(values));
                action.resetForm();
                navigate("/carinsurance");
            }
        });
    return (
        // <section className="vh-100 container" style={{ backgroundColor: "#9A616D" }}>
        <div className="container" style={{ maxWidth: '1000px', marginTop: '20px' }}>
            <div className="container">
                <div className="container">
                    <div className="container" style={{ borderRadius: "1rem" }}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img
                                    src={car}
                                    alt="login form"
                                    className="img-fluid"
                                    style={{ borderRadius: "1rem 0 0 1rem" }}
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
                                            <span className="h1 fw-bold mb-0">Buy Car Insurance!</span>
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
                                                name="carRegNo"
                                                value={values.carRegNo}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example17">
                                                Car Registration number
                                            </label>
                                            {errors.carRegNo && touched.carRegNo ? (
                                                <p className="form-error">{errors.carRegNo}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            {/* <input
                                                    type="text"
                                                    id="form2Example27"
                                                    className="form-control form-control-lg"
                                                /> */}
                                            <select className="form-control form-control-lg"
                                                name="carType"
                                                value={values.carType}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option value="">Choose</option>
                                                <option value="hatchback">Hatchback</option>
                                                <option value="sedan">Sedan</option>
                                                <option value="suv">SUV</option>
                                            </select>
                                            <label className="form-label" htmlFor="form2Example27">
                                                Car Type
                                            </label>
                                            {errors.carType && touched.carType ? (
                                                <p className="form-error">{errors.carType}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="date"
                                                id="form2Example27"
                                                className="form-control form-control-lg"
                                                // style={{ color: 'transparent' }}
                                                name="regDate"
                                                value={values.regDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                                Registration Date
                                            </label>
                                            {errors.regDate && touched.regDate ? (
                                                <p className="form-error">{errors.regDate}</p>
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

export default CarForm;