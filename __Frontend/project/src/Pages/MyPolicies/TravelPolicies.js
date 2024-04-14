import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
const serverUrl = "http://localhost:8080/mypolicies/travel/{clientId}?clientId=" + localStorage.getItem("clientId");
// http://localhost:8080/mypolicies/home/{clientId}?clientId=6
console.log(localStorage.getItem("clientId"));

function TravelPolicies() {
    const [travelInsList, settravelInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            console.log(response.data);
            settravelInsList(response.data);
        });
    }
    useEffect(() => {
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
                                    <Card.Body>
                                        <Card.Title>{travel.vendorName}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Policy ID: {travel.pid}</ListGroup.Item>
                                        <ListGroup.Item>Bought on: {travel.startDate}</ListGroup.Item>
                                        <ListGroup.Item >Destination: {travel.destination}</ListGroup.Item>
                                        <ListGroup.Item >Duration: {travel.duration} days</ListGroup.Item>
                                        <ListGroup.Item >No. of Travlers: {travel.noOfTravlers}</ListGroup.Item>
                                        {/* <ListGroup.Item >Value of Household items: ₹ {travel.valueOfHouseHoldItems}</ListGroup.Item> */}
                                        <ListGroup.Item >Premium: ₹ {travel.premium}</ListGroup.Item>
                                        <ListGroup.Item>IDV Cover: ₹ {travel.idvCover}</ListGroup.Item>

                                    </ListGroup>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TravelPolicies;