import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useFormik } from "formik";
import { registerSchema } from '../../Validations/RegisterValidation';
import { useState } from 'react';
// import AfterRegister from '../AfterRegister';
import car from '../../Images/register.jpg'
import Login from './VendorLogin';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};
const serverUrl = "http://localhost:8080/vendorRegister";
function VendorRegister() {
    const [submitted, setSubmitted] = useState(false);
    const [sameEmail, setSameEmail] = useState(false);
    var temp = false;
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: registerSchema,
            onSubmit: (values, action) => {
                console.log(values);
                axios.post(serverUrl, values).then((response) => {
                    if (response.data == true) {
                        console.log("hurrayyyy!!!!")
                        console.log(response);
                        console.log(response.data);
                        alert("User Registered Successfully!");
                        setSubmitted(true);
                    }
                    else {
                        setSameEmail(true);
                    }
                });
                // console.log(temp);
                action.resetForm();
                // e.preventDefault();
                // if (response.body.isEmailValid) {
                // setSubmitted(true);
                // }
                // else setSameEmail(true);
            },
        });
    if (submitted) {
        return <Login />;
    }
    return (
        <div className="container" style={{ maxWidth: '1300px', maxHeight: '1500px', marginTop: '20px' }}>
            <div className="container">
                <div className="container">
                    <div className="container" style={{ borderRadius: "1rem" }}>
                        <div className="row g-0" >
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                {/* style={{borderStyle:"solid"}} */}
                                <img
                                    src={car}
                                    alt="login form"
                                    className="img-fluid"
                                    style={{
                                        borderRadius: "1rem 0 0 1rem"
                                        // flexShrink: '0',
                                        // minWidth:'100%',
                                        // maxWidth:'100%'    
                                    }}
                                />
                            </div>
                            <div className="col-md-6 col-lg-5 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black" >
                                    <form onSubmit={handleSubmit} >
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i
                                                className="fas fa-cubes fa-2x me-3"
                                                style={{ color: "#ff6219" }}
                                            />
                                            <span className="h2 fw-bold mb-0">Vendor Register!</span>
                                        </div>
                                        {/* <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Enter following details to Login into your account
                    </h5> */}
                                        <div className="form-outline mb-4">
                                            <input
                                                name="name" className="form-control" type="text"
                                                placeholder="Name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example17">
                                                Name
                                            </label>
                                            {errors.name && touched.name ? (
                                                <p className="form-error">{errors.name}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="email" className="form-control" type="email"
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                                Email
                                            </label>
                                            {errors.email && touched.email ? (
                                                <p className="form-error">{errors.email}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="password" className="form-control" type="password"
                                                placeholder="Password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                                Password
                                            </label>
                                            {errors.password && touched.password ? (
                                                <p className="form-error">{errors.password}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="confirm_password" className="form-control" type="password"
                                                placeholder="Confirm Password"
                                                value={values.confirm_password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                                Confirm Password
                                            </label>
                                            {errors.confirm_password && touched.confirm_password ? (
                                                <p className="form-error">{errors.confirm_password}</p>
                                            ) : null}
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <button
                                                className="btn btn-dark btn-md btn-block"
                                                type="submit"
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <div className="pt-1 mb-4">
                                            {sameEmail ? (
                                                <p className="form-error">Email already exists! Please use a different Email.</p>
                                            ) : null}
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

export default VendorRegister;

