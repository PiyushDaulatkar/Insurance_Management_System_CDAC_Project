import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { loginSchema } from '../Validations/LoginValidation';
import { useAuth } from "../Context/Auth";
{/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link> */ }
const initialValues = {
  email: "",
  password: ""
};
const serverUrl = "http://127.0.0.1:9999/login";
function Login() {
  const [submitted, setSubmitted] = useState(false);
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(
          values
        );
        axios.post(serverUrl, values).then((response) => {
          if (response.data.affectedRows != undefined &&
            response.data.affectedRows > 0) {
            console.log("hurrayyyy!!!!")
            console.log(response.data);
            console.log(response);
            const token='12345';
            storeTokenInLS(token);
            navigate('/home')
            // setSubmitted(true);
            // temp = true;
          }
          else {
            alert("Something went wrong!");
          }
        });
        // console.log(temp);
        action.resetForm();
        // e.preventDefault();
        // if (response.body.isEmailValid) {
        // setSubmitted(true);
        // }
        // else setSameEmail(true);
      }
    });

  return (
    <div class="container pb-5 mb-sm-4" >
      <div class="row pt-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div class="col-md-6 pt-sm-3" id="register-parent-box">
          <div class="card">
            <div class="card-body">
              <h2 class="h4 mb-1">Sign in</h2>
              <form onSubmit={handleSubmit}>
                <div class="col-sm-12">
                  <div class="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-mail"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                    </div>
                    <input name='email' class="form-control" type="email" placeholder="Email" required=""
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                  </div>
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </div>
                {/* <hr></hr> */}
                <br></br>
                <div class="col-sm-12">
                  <div class="input-group form-group">
                    <div class="input-group-prepend"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span></div>
                    <input name='password' class="form-control" type="password" placeholder="Password" required=""
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                  </div>
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                  <hr class="mt-4" />
                  <div class="text-right pt-4">
                    <button class="btn btn-primary" type="submit">Sign In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

