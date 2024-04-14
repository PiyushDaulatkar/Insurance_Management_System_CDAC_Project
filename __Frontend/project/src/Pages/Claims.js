var handleSubmit=()=>{

}
function Claims() {
    return (
        <>
            <div className="container" style={{ maxWidth: '1000px', marginTop: '70px' }}>
                <div className="container">
                    <div className="container">
                        <div className="container" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0" >
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    {/* style={{borderStyle:"solid"}} */}
                                    {/* <img
                                        src={}
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    /> */}
                                </div>
                                <div className="col-md-6 col-lg-5 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" >
                                        <form onSubmit={handleSubmit} >
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i
                                                    className="fas fa-cubes fa-2x me-3"
                                                    style={{ color: "#ff6219" }}
                                                />
                                                <span className="h2 fw-bold mb-0">File Claim!</span>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <select name="policyid" class="form-control">
                                                    <option value="volvo">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                                <label className="form-label" htmlFor="form2Example17">
                                                    Policy no.
                                                </label>
                                                {/* {errors.email && touched.email ? (
                                                    <p className="form-error">{errors.email}</p>
                                                ) : null} */}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    name='detials' class="form-control" type="text"
                                                    // value={values.password}
                                                    // onChange={handleChange}
                                                    // onBlur={handleBlur}
                                                />
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Other details
                                                </label>
                                                {/* {errors.password && touched.password ? (
                                                    <p className="form-error">{errors.password}</p>
                                                ) : null} */}
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <button
                                                    className="btn btn-dark btn-md btn-block"
                                                    type="submit"
                                                >
                                                    File Claim
                                                </button>
                                            </div>
                                            {/* <div className="pt-1 mb-4">
                                                {invalidLogin ? (
                                                    <p className="form-error">Invalid Credentials!</p>
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
        </>
    );
}

export default Claims;