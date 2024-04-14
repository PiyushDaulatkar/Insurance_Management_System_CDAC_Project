import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Register.css'
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { registerSchema } from '../Validations/RegisterValidation';
import { useEffect, useState } from 'react';
import AfterRegister from '../AfterRegister';
import car from '../Images/profile.png'
import Login from './Login';
// {
//     "name": "ankit",
//     "email": "ankit@gmail.com",
//     "password": "12345",
//     "role": "CLIENT",
//     "dob": "1999-03-23",
//     "gender": null,
//     "maritalStatus": null,
//     "state": "Maharshtra",
//     "city": "Gondia",
//     "annualIncome": 8392298
// }

const serverUrl = "http://localhost:8080/profile/" + localStorage.getItem("clientId");
console.log(serverUrl);
function Profile() {
    var tempvalues = {
        "name": "",
        "email": "",
        "password": "",
        "role": "CLIENT",
        "dob": "",
        "gender": 'Male',
        "maritalStatus": null,
        "state": "",
        "city": "",
        "annualIncome": 0
    };
    const [values, setValues] = useState(tempvalues);
    const [submitted, setSubmitted] = useState({});
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            // console.log(response.data);
            setValues(response.data);
            // console.log("hiii-"+initialValues);
        });
    }
    useEffect(() => {
        getValues();
    }, []);
    const handleChange = (args) => {
        var copyofValues = { ...values };
        copyofValues[args.target.name] = args.target.value;
        setValues(copyofValues);
        console.log(values);
    }
    const UpdateRecord = () => {
        console.log(values);
        axios.put(serverUrl, values).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
                getValues();
                alert("Details updated successfully!");
            }
            else {
                alert("Something went wrong!");
            }
        });
    }
    return (
        <div className="container " style={{ marginTop: '30px' }}>
            <div className="container">
                <div className="container">
                    <div className="container" style={{ borderRadius: "1rem" }}>
                        <div className="row" >
                            <div className="col-md-6 col-lg-5 d-none d-md-block" style={{ maxWidth: '250px', maxHeight: '1500px' }}>
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
                                <div className="d-flex align-items-center mb-3 pb-1">
                                    <i
                                        className="fas fa-cubes fa-2x me-3"
                                        style={{ color: "#ff6219" }}
                                    />
                                    <span className="h2 fw-bold mb-0" style={{ textAlign: 'center' }}>My Profile</span>
                                </div>
                            </div>
                            <form className="col-md-6 col-lg-7 d-flex align-items-center">

                                <div className="card-body p-4 p-lg-5 text-black" >

                                    {/* <div className="d-flex align-items-center mb-3 pb-1">
                                        <i
                                            className="fas fa-cubes fa-2x me-3"
                                            style={{ color: "#ff6219" }}
                                        />
                                        <span className="h2 fw-bold mb-0">My Profile</span>
                                    </div> */}
                                    <div className="form-outline mb-4">
                                        <input
                                            name="name" className="form-control" type="text"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="form2Example17">
                                            Name
                                        </label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input
                                            disabled="disabled"
                                            name="email" className="form-control" type="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="form2Example27">
                                            Email
                                        </label>
                                    </div>
                                    {/* <div className="form-outline mb-4">
                                        <input
                                            name="password" className="form-control" type="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="form2Example27">
                                            Password
                                        </label>
                                    </div> */}

                                    <div className="form-outline mb-4">
                                        <select className="form-control form-control-lg"
                                            name="maritalStatus"
                                            value={values.maritalStatus}
                                            onChange={handleChange}
                                        >
                                            <option value="">Choose</option>
                                            <option value="Married">Married</option>
                                            <option value="Single">Single</option>
                                        </select>
                                        <label className="form-label" htmlFor="form2Example27">
                                            Marital Status
                                        </label>
                                    </div>
                                </div>
                                <div className="card-body p-4 p-lg-5 text-black" >

                                    {/* ------------------------------------------------------------------------ */}
                                    <div className="form-outline mb-4">
                                        <input
                                            name="dob" className="form-control" type="date"
                                            placeholder="DOB"
                                            value={values.dob}
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="form2Example27">
                                            Date of birth
                                        </label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input
                                            name="city" className="form-control" type="text"
                                            placeholder="city"
                                            value={values.city}
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="form2Example27">
                                            City
                                        </label>
                                    </div>
                                    {/* ------------------------------------------------------------------------ */}
                                    <div className="form-outline mb-4">
                                        <input
                                            name="state" className="form-control" type="text"
                                            placeholder="state"
                                            value={values.state}
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="form2Example27">
                                            State
                                        </label>
                                    </div>
                                    {/* ------------------------------------------------------------------------ */}
                                    <div className="form-outline mb-4">
                                        <input
                                            name="annualIncome" className="form-control" type="number"
                                            placeholder="0"
                                            value={values.annualIncome}
                                            onChange={handleChange}
                                        />
                                        <label className="form-label" htmlFor="form2Example27">
                                            Annual Income
                                        </label>
                                    </div>
                                    {/* ------------------------------------------------------------------------ */}
                                    {/* <div className="pt-1 mb-4">
                                        <button
                                            className="btn btn-dark btn-md btn-block"
                                            onClick={UpdateRecord}
                                        >
                                            Update
                                        </button>
                                    </div> */}
                                    {/* <div className="pt-1 mb-4">
                                            {sameEmail ? (
                                                <p className="form-error">Email already exists! Please use a different Email.</p>
                                            ) : null}
                                        </div> */}


                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="pt-1 mb-4" style={{ textAlign: 'center' }}>
                        <button
                            className="btn btn-dark btn-lg btn-block"
                            onClick={UpdateRecord}
                        >
                            Update
                        </button>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Profile;