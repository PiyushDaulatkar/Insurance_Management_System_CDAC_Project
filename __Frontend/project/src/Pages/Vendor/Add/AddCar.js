import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useFormik } from "formik";
import { ValSchema } from './ValSchema';
import { useState } from 'react';
// import AfterRegister from '../AfterRegister';
import car from '../../../Images/addins.jpg'
import Login from '../VendorLogin';
import VendorHomePage from '../VendorHomePage';
var serverUrl = "http://localhost:8080/addCarInsurance";
const initialValues = {
    "vendorId": localStorage.getItem('vendorId'),
    // "insuranceId": 0,
    "vendorName": "string",
    "idvCover": '',
    "premium": '',
    "claimsSettled": "",
    "addOns": ""
};
function AddCar() {
    const [submitted, setSubmitted] = useState(false);
    // const [sameEmail, setSameEmail] = useState(false);
    var temp = false;
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: ValSchema,
            onSubmit: (values, action) => {
                console.log(values);
                values.claimsSettled+='%';
                axios.post(serverUrl, values).then((response) => {
                    if (response.data == true) {
                        console.log("hurrayyyy!!!!")
                        console.log(response);
                        console.log(response.data);
                        alert("Policy added Successfully!");
                        setSubmitted(true);
                    }
                    else {
                        // setSameEmail(true);
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
        return <VendorHomePage />;
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
                                        marginTop:'100px',
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
                                            <span className="h2 fw-bold mb-0">Add Policy!</span>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="idvCover" className="form-control" type="number"
                                                // placeholder="Cover"
                                                value={values.idvCover}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example17">
                                                Cover
                                            </label>
                                            {errors.idvCover && touched.idvCover ? (
                                                <p className="form-error">{errors.idvCover}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="premium" className="form-control" type="number"
                                                // placeholder="premium"
                                                value={values.premium}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                            Premium
                                            </label>
                                            {errors.premium && touched.premium ? (
                                                <p className="form-error">{errors.premium}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="claimsSettled" className="form-control" type="text"
                                                // placeholder="claims Settled in %"
                                                value={values.claimsSettled}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                            Claims Settled in %
                                            </label>
                                            {errors.claimsSettled && touched.claimsSettled ? (
                                                <p className="form-error">{errors.claimsSettled}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                name="addOns" className="form-control" type="text"
                                                // placeholder="details"
                                                value={values.addOns}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                                Details
                                            </label>
                                            {errors.addOns && touched.addOns ? (
                                                <p className="form-error">{errors.addOns}</p>
                                            ) : null}
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <button
                                                className="btn btn-dark btn-md btn-block"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                        {/* <div className="pt-1 mb-4">
                                            {sameEmail ? (
                                                <p className="form-error">Email already exists! Please use a different Email.</p>
                                            ) : null}
                                        </div> */}
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

export default AddCar;