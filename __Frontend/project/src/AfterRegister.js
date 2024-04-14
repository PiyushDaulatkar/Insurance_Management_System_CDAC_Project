import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function AfterRegister() {
    return (
        <div class="container pb-5 mb-sm-4" >
            <div class="row pt-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',borderWidth:'2px'}}>
                <div class="col-md-6 pt-5 pt-sm-3">
                    <h2 class="h4 mb-3" style={{color:"green"}}>Congrats! You have successfully signed up!</h2>
                    {/* <h2 class="h4 mb-3">Click here to Login!</h2>   */}
                    <Link to="/login">
                        <button class="btn btn-primary" type="submit" style={{ marginTop: '10px' }}>Click here to Login!</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default AfterRegister;