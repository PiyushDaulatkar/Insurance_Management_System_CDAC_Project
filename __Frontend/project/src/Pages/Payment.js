import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { loginSchema } from '../Validations/LoginValidation';
import { useAuth } from "../Context/Auth";
import car from '../Images/login.jpg'
{/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link> */ }
const initialValues = {
  card: "",
  cvv: "",
  expiry:""
};
// const serverUrl = "http://localhost:8080/login";
function Login() {
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {

      }
    });

  return (
    <div className="container" style={{ maxWidth: '1000px', marginTop: '70px' }}>
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
                  style={{ borderRadius: "1rem 0 0 1rem" }}
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
                      <span className="h2 fw-bold mb-0">Buyer Login!</span>
                    </div>
                    {/* <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Enter following details to Login into your account
                    </h5> */}
                    <div className="form-outline mb-4">
                      <input
                        name='card' class="form-control" type="email" placeholder="Email" required=""
                        value={values.card}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label className="form-label" htmlFor="form2Example17">
                        Card Number
                      </label>
                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        name='password' class="form-control" type="password" placeholder="Password" required=""
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
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-md btn-block"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="pt-1 mb-4">
                      {invalidLogin ? (
                        <p className="form-error">Invalid Credentials!</p>
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

export default Login;

