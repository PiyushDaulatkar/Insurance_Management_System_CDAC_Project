import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

// const serverUrl = "http://localhost:8080/vendor/car/{vendorId}?vendorId=" + localStorage.getItem("vendorId");
var serverUrl ='http://localhost:8080/vendor/car/'+ localStorage.getItem("vendorId");
// http://localhost:8080/vendor/car/{vendorId}?vendorId=2
function VendorCar() {
    const [carInsList, setCarInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            console.log(response.data);
            setCarInsList(response.data);
            // console.log("hiii-"+initialValues);
        });
    }
    useEffect(() => {
        // setTimeout(() => {
            // window.location.reload();
            serverUrl ='http://localhost:8080/vendor/car/'+ localStorage.getItem("vendorId");
            getValues();
        //   }, 1000);
        
    }, []);
    return (
        <>
            <div class="container text-center">
                <div class="row">
                    {
                        carInsList.map((car) => {
                            return (
                                <Card style={{ width: '18rem', marginRight: '5px' }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                                    {/* <Card.Body>
                                        <Card.Title>{car.vendorName}</Card.Title>
                                    </Card.Body> */}
                                    <ListGroup className="list-group-flush">
                                        {/* "insuranceId": 2,
                                        "vendorName": "Reliance",
                                        "idvCover": 243500,
                                        "premium": 3416,
                                        "claimsSettled": "96.8%",
                                        "addOns": "Buy without inspection, */}
                                        {/* <ListGroup.Item>Policy ID: {car.pid}</ListGroup.Item>
                                        <ListGroup.Item>Bought on: {car.startDate}</ListGroup.Item>
                                        <ListGroup.Item >Reg. No.: {car.carRegNo}</ListGroup.Item> */}
                                        <ListGroup.Item >Premium: ₹ {car.premium}</ListGroup.Item>
                                        <ListGroup.Item>IDV Cover: ₹ {car.idvCover}</ListGroup.Item>
                                        <ListGroup.Item>{car.addOns}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default VendorCar;