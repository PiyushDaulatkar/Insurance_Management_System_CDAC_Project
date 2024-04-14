import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import InsuranceCard from "../Components/InsuranceCard"

function InsuranceCardGroup() {
    return (
            <div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-3">
                            {/* <Link to="/car-form"> */}
                                <InsuranceCard name="Health" img="healthinsurance" link="/health-form"/>
                            {/* </Link> */}
                        </div>
                        <div class="col-md-3">
                            {/* <Link to="/car-form"> */}
                                <InsuranceCard name="Car" img="carinsurance" link="/car-form"/>
                            {/* </Link> */}
                        </div>
                        <div class="col-md-3">
                            {/* <Link to="/car-form"> */}
                                <InsuranceCard name="Travel" img="healthinsurance" link="/travel-form"/>
                            {/* </Link> */}
                        </div>
                        <div class="col-md-3">
                            {/* <Link to="/car-form"> */}
                                <InsuranceCard name="Home" img="healthinsurance" link="/home-form"/>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default InsuranceCardGroup;