import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import CarCard from './CarCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
const serverUrl = 'http://localhost:8080/allCarInsurances';

function CarInsurance() {
    const [carInsList, setcarInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            // console.log(response.data);
            setcarInsList(response.data);
        });
    }
    useEffect(() => { getValues(); }, []);
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    {
                        carInsList.map((car) => {
                            return (
                                <div class="col-md-4" style={{ marginTop: "20px" }}>
                                    <CarCard
                                        vendorName={car.vendorName}
                                        idvCover={car.idvCover}
                                        claimsSettled={car.claimsSettled}
                                        addOnns={car.addOns}
                                        preminum={car.premium}
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

export default CarInsurance;