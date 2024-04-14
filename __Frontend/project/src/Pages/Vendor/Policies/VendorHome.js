import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

var serverUrl = "http://localhost:8080/vendor/home/{vendorId}?vendorId=" + localStorage.getItem("vendorId");
// http://localhost:8080/vendor/home/{vendorId}?vendorId=2
function VendorHome() {
    const [homeInsList, setHomeInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            console.log(response.data);
            setHomeInsList(response.data);
            // console.log("hiii-"+initialValues);
        });
    }
    useEffect(() => {
        serverUrl = "http://localhost:8080/vendor/home/{vendorId}?vendorId=" + localStorage.getItem("vendorId");
        getValues();
    }, []);
    return (
        <>
            <div class="container text-center">
                <div class="row">
                    {
                        homeInsList.map((home) => {
                            return (
                                <Card style={{ width: '18rem', marginRight: '5px' }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                                    {/* <Card.Body>
                                        <Card.Title>{home.vendorName}</Card.Title>
                                    </Card.Body> */}
                                    <ListGroup className="list-group-flush">
                                        {/* "insuranceId": 2,
                                        "vendorName": "Reliance",
                                        "idvCover": 243500,
                                        "premium": 3416,
                                        "claimsSettled": "96.8%",
                                        "addOns": "Buy without inspection, */}
                                        {/* <ListGroup.Item>Policy ID: {home.pid}</ListGroup.Item>
                                        <ListGroup.Item>Bought on: {home.startDate}</ListGroup.Item>
                                        <ListGroup.Item >Reg. No.: {home.homeRegNo}</ListGroup.Item> */}
                                        <ListGroup.Item >Premium: ₹ {home.premium}</ListGroup.Item>
                                        <ListGroup.Item>Cover: ₹ {home.idvCover}</ListGroup.Item>
                                        <ListGroup.Item>{home.addOns}</ListGroup.Item>
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

export default VendorHome;