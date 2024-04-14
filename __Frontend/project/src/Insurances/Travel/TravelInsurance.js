import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import TravelCard from './TravelCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const serverUrl = 'http://localhost:8080/allTravelInsurances';

function TravelInsurance() {
    const [travelInsList, settravelInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            // console.log(response.data);
            settravelInsList(response.data);
        });
    }
    useEffect(() => { getValues(); }, []);
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    {
                        travelInsList.map((car) => {
                            return (
                                <div class="col-md-4" style={{ marginTop: "20px" }}>
                                    <TravelCard
                                        vendorName={car.vendorName}
                                        idvCover={car.idvCover}
                                        claimsSettled={car.claimsSettled}
                                        addOnns={car.addOns}
                                        premium={car.premium}
                                        vendorId={car.vendorId}
                                    />
                                </div>
                            )
                        })
                    }

                    {/* <div class="col-md-4" style={{marginTop:"20px"}}>
                            <Link to="/"><CarCard /></Link>
                        </div>
                        <div class="col-md-4" style={{marginTop:"20px"}} >
                            <Link to="/"><CarCard /></Link>
                        </div> */}

                </div>
            </div>
        </div>
    );
}

export default TravelInsurance;