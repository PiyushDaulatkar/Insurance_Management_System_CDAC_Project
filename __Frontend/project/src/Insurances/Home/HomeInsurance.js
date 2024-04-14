import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import HomeCard from './HomeCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
const serverUrl = 'http://localhost:8080/allHomeInsurances';

function HomeInsurance() {
    const [homeInsList, sethomeInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            // console.log(response.data);
            sethomeInsList(response.data);
        });
    }
    useEffect(() => { getValues(); }, []);
    return (<>
        <div>
            <div class="container text-center">
                <div class="row">
                    {
                        homeInsList.map((car) => {
                            return (
                                <div class="col-md-4" style={{ marginTop: "20px" }}>
                                    <HomeCard
                                        vendorName={car.vendorName}
                                        idvCover={car.idvCover}
                                        claimsSettled={car.claimsSettled}
                                        addOns={car.addOns}
                                        premium={car.premium}
                                        vendorId={car.vendorId}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>);
}

export default HomeInsurance;