import 'bootstrap/dist/css/bootstrap.css';
import travel from './travel.png'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { travelFormSchema } from "./TravelFormValidation";
import { useAuth } from '../../Context/Auth';
import { useEffect } from 'react';
const initialValues = {
    Destination: "",
    duration: "",
    noOfTravlers: ""
};
function TravelForm() {
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
            validationSchema: travelFormSchema,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
                window.localStorage.setItem("travelForm", JSON.stringify(values));
                action.resetForm();
                navigate("/travelinsurance");
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
                                    src={travel}
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
                                            <span className="h1 fw-bold mb-0">Buy Travel Insurance!</span>
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
                                                name="Destination"
                                                value={values.Destination}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example17">
                                            Destination
                                            </label>
                                            {errors.Destination && touched.Destination ? (
                                                <p className="form-error">{errors.Destination}</p>
                                            ) : null}
                                        </div>
                                        
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                id="form2Example27"
                                                className="form-control form-control-lg"
                                                // style={{ color: 'transparent' }}
                                                name="duration"
                                                value={values.duration}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                            Duration (in days)
                                            </label>
                                            {errors.duration && touched.duration ? (
                                                <p className="form-error">{errors.duration}</p>
                                            ) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                id="form2Example27"
                                                className="form-control form-control-lg"
                                                // style={{ color: 'transparent' }}
                                                name="noOfTravlers"
                                                value={values.noOfTravlers}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <label className="form-label" htmlFor="form2Example27">
                                            No. of Travlers
                                            </label>
                                            {errors.noOfTravlers && touched.noOfTravlers ? (
                                                <p className="form-error">{errors.noOfTravlers}</p>
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

export default TravelForm;