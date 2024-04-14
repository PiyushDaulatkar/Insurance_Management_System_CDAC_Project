import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

var serverUrl = "http://localhost:8080/vendor/travel/{vendorId}?vendorId=" + localStorage.getItem("vendorId");
// http://localhost:8080/vendor/travel/{vendorId}?vendorId=2
function VendorTravel() {
    const [travelInsList, setTravelInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            console.log(response.data);
            setTravelInsList(response.data);
            // console.log("hiii-"+initialValues);
        });
    }
    useEffect(() => {
        serverUrl = "http://localhost:8080/vendor/travel/{vendorId}?vendorId=" + localStorage.getItem("vendorId");
        getValues();
    }, []);
    return (
        <>
            <div class="container text-center">
                <div class="row">
                    {
                        travelInsList.map((travel) => {
                            return (
                                <Card style={{ width: '18rem', marginRight: '5px' }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                                    {/* <Card.Body>
                                        <Card.Title>{travel.vendorName}</Card.Title>
                                    </Card.Body> */}
                                    <ListGroup className="list-group-flush">
                                        {/* "insuranceId": 2,
                                        "vendorName": "Reliance",
                                        "idvCover": 243500,
                                        "premium": 3416,
                                        "claimsSettled": "96.8%",
                                        "addOns": "Buy without inspection, */}
                                        {/* <ListGroup.Item>Policy ID: {travel.pid}</ListGroup.Item>
                                        <ListGroup.Item>Bought on: {travel.startDate}</ListGroup.Item>
                                        <ListGroup.Item >Reg. No.: {travel.travelRegNo}</ListGroup.Item> */}
                                        <ListGroup.Item >Premium: ₹ {travel.premium}</ListGroup.Item>
                                        <ListGroup.Item>IDV Cover: ₹ {travel.idvCover}</ListGroup.Item>
                                        <ListGroup.Item>{travel.addOns}</ListGroup.Item>
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

export default VendorTravel;