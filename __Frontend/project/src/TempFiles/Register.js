import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Register.css'
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { registerSchema } from '../Validations/RegisterValidation';
import { useState } from 'react';
import AfterRegister from '../AfterRegister';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};
const serverUrl = "http://127.0.0.1:9999/register";
function Register() {
    const [submitted, setSubmitted] = useState(false);
    const [sameEmail, setSameEmail] = useState(false);
    var temp = false;
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: registerSchema,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
                axios.post(serverUrl, values).then((response) => {
                    if (response.data.affectedRows != undefined &&
                        response.data.affectedRows > 0) {
                        console.log("hurrayyyy!!!!")
                        setSubmitted(true);
                        temp = true;
                    }
                    else {
                        alert("Something went wrong!");
                    }
                });
                console.log(temp);
                action.resetForm();
                // e.preventDefault();
                // if (response.body.isEmailValid) {
                // setSubmitted(true);
                // }
                // else setSameEmail(true);
            },
        });
    if (submitted) {
        return <AfterRegister />;
    }

    return (
        <div classNameName="container pb-5 mb-sm-4" >
            <div className="row pt-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="col-md-6 pt-5 pt-sm-3" id="register-parent-box">
                    <h2 className="h4 mb-3">No account? Sign up</h2>
                    <p>Registration takes less than a minute but gives you full control over your orders.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        name="name" className="form-control" type="text"
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name ? (
                                        <p className="form-error">{errors.name}</p>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label for="reg-email">E-mail Address</label>
                                    <input
                                        name="email" className="form-control" type="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? (
                                        <p className="form-error">{errors.email}</p>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label for="reg-password">Password</label>
                                    <input
                                        name="password" className="form-control" type="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password ? (
                                        <p className="form-error">{errors.password}</p>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label for="reg-password-confirm">Confirm Password</label>
                                    <input
                                        name="confirm_password" className="form-control" type="password"
                                        placeholder="Confirm Password"
                                        value={values.confirm_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.confirm_password && touched.confirm_password ? (
                                        <p className="form-error">{errors.confirm_password}</p>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            {
                                sameEmail ? <h3 className="h4 mb-3" style={{ color: "red", marginTop: "7px" }}>Email already exists! please enter different email.</h3> : null
                            }
                            <button className="btn btn-primary" type="submit" style={{ marginTop: '7px' }}>Sign Up</button>
                        </div>
                    </form>
                </div>
                {/* <div className="col-md-6 pt-5 pt-sm-3" id="register-img">
                    <img
                        src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                        alt=""
                    />
                </div> */}
            </div>
        </div>

        //----------------------------------------------------

        // <div>
        //     <section classNameName="vh-50" style={{ backgroundColor: "#eee" ,height:'100px'}}>
        //         <div classNameName="container h-50" style={{ backgroundColor: "#eee" ,height:'100px'}}>
        //             <div classNameName="row d-flex justify-content-center align-items-center h-50" style={{ backgroundColor: "#eee" ,height:'100px'}}>
        //                 <div classNameName="col-lg-12 col-xl-11">
        //                     <div classNameName="card text-black" style={{ borderRadius: 25 }}>
        //                         <div classNameName="card-body p-md-5">
        //                             <div classNameName="row justify-content-center">
        //                                 <div classNameName="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        //                                     <p classNameName="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        //                                         Sign up
        //                                     </p>
        //                                     <form classNameName="mx-1 mx-md-4">
        //                                         <div classNameName="d-flex flex-row align-items-center mb-4">
        //                                             <i classNameName="fas fa-user fa-lg me-3 fa-fw" />
        //                                             <div classNameName="form-outline flex-fill mb-0">
        //                                                 <input
        //                                                     type="text"
        //                                                     id="form3Example1c"
        //                                                     classNameName="form-control"
        //                                                 />
        //                                                 <label classNameName="form-label" htmlFor="form3Example1c">
        //                                                     Your Name
        //                                                 </label>
        //                                             </div>
        //                                         </div>
        //                                         <div classNameName="d-flex flex-row align-items-center mb-4">
        //                                             <i classNameName="fas fa-envelope fa-lg me-3 fa-fw" />
        //                                             <div classNameName="form-outline flex-fill mb-0">
        //                                                 <input
        //                                                     type="email"
        //                                                     id="form3Example3c"
        //                                                     classNameName="form-control"
        //                                                 />
        //                                                 <label classNameName="form-label" htmlFor="form3Example3c">
        //                                                     Your Email
        //                                                 </label>
        //                                             </div>
        //                                         </div>
        //                                         <div classNameName="d-flex flex-row align-items-center mb-4">
        //                                             <i classNameName="fas fa-lock fa-lg me-3 fa-fw" />
        //                                             <div classNameName="form-outline flex-fill mb-0">
        //                                                 <input
        //                                                     type="password"
        //                                                     id="form3Example4c"
        //                                                     classNameName="form-control"
        //                                                 />
        //                                                 <label classNameName="form-label" htmlFor="form3Example4c">
        //                                                     Password
        //                                                 </label>
        //                                             </div>
        //                                         </div>
        //                                         <div classNameName="d-flex flex-row align-items-center mb-4">
        //                                             <i classNameName="fas fa-key fa-lg me-3 fa-fw" />
        //                                             <div classNameName="form-outline flex-fill mb-0">
        //                                                 <input
        //                                                     type="password"
        //                                                     id="form3Example4cd"
        //                                                     classNameName="form-control"
        //                                                 />
        //                                                 <label classNameName="form-label" htmlFor="form3Example4cd">
        //                                                     Repeat your password
        //                                                 </label>
        //                                             </div>
        //                                         </div>
        //                                         <div classNameName="form-check d-flex justify-content-center mb-5">
        //                                             <input
        //                                                 classNameName="form-check-input me-2"
        //                                                 type="checkbox"
        //                                                 defaultValue=""
        //                                                 id="form2Example3c"
        //                                             />
        //                                             <label classNameName="form-check-label" htmlFor="form2Example3">
        //                                                 I agree all statements in{" "}
        //                                                 <a href="#!">Terms of service</a>
        //                                             </label>
        //                                         </div>
        //                                         <div classNameName="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        //                                             <button type="button" classNameName="btn btn-primary btn-lg">
        //                                                 Register
        //                                             </button>
        //                                         </div>
        //                                     </form>
        //                                 </div>
        //                                 <div classNameName="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
        //                                     <img
        //                                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
        //                                         classNameName="img-fluid"
        //                                         alt="Sample image"
        //                                     />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        // </div>
    );
}

export default Register;

