import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
const serverUrl = "http://localhost:8080/mypolicies/health/{clientId}?clientId=" + localStorage.getItem("clientId");
// http://localhost:8080/mypolicies/health/{clientId}?clientId=6
console.log(localStorage.getItem("clientId"));
function HealthPolicies() {
    const [healthInsList, sethealthInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            console.log(response.data);
            sethealthInsList(response.data);
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
                        healthInsList.map((health) => {
                            return (
                                <Card style={{ width: '18rem', marginRight: '5px' }}>
                                    <Card.Body>
                                        <Card.Title>{health.vendorName}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Policy ID: {health.pid}</ListGroup.Item>
                                        <ListGroup.Item>Bought on: {health.startDate}</ListGroup.Item>
                                        {/* <ListGroup.Item >City: {health.city}</ListGroup.Item>
                                        <ListGroup.Item >Value of Health: ₹ {health.valueOfHealth}</ListGroup.Item>
                                        <ListGroup.Item >Value of Household items: ₹ {health.valueOfHouseHoldItems}</ListGroup.Item> */}
                                        <ListGroup.Item >Premium: ₹ {health.premium}</ListGroup.Item>
                                        <ListGroup.Item>IDV Cover: ₹ {health.idvCover}</ListGroup.Item>

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

export default HealthPolicies;