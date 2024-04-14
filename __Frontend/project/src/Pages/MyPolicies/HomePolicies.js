import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
const serverUrl = "http://localhost:8080/mypolicies/home/{clientId}?clientId=" + localStorage.getItem("clientId");
// http://localhost:8080/mypolicies/home/{clientId}?clientId=6
console.log(localStorage.getItem("clientId"));
function HomePolicies() {
    const [homeInsList, sethomeInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            console.log(response.data);
            sethomeInsList(response.data);
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
                        homeInsList.map((home) => {
                            return (
                                <Card style={{ width: '18rem', marginRight: '5px' }}>
                                    <Card.Body>
                                        <Card.Title>{home.vendorName}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Policy ID: {home.pid}</ListGroup.Item>
                                        <ListGroup.Item>Bought on: {home.startDate}</ListGroup.Item>
                                        <ListGroup.Item >City: {home.city}</ListGroup.Item>
                                        <ListGroup.Item >Value of Home: ₹ {home.valueOfHome}</ListGroup.Item>
                                        <ListGroup.Item >Value of Household items: ₹ {home.valueOfHouseHoldItems}</ListGroup.Item>
                                        <ListGroup.Item >Premium: ₹ {home.premium}</ListGroup.Item>
                                        <ListGroup.Item>IDV Cover: ₹ {home.idvCover}</ListGroup.Item>

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

export default HomePolicies;