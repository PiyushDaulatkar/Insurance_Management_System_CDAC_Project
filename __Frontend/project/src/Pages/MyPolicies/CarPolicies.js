import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const serverUrl = "http://localhost:8080/mypolicies/car/{clientId}?clientId=" + localStorage.getItem("clientId");
// http://localhost:8080/mypolicies/car/{clientId}?clientId=6
console.log(localStorage.getItem("clientId"));
function CarPolicies() {
    const [carInsList, setCarInsList] = useState([]);
    const getValues = () => {
        axios.get(serverUrl).then((response) => {
            console.log(response.data);
            setCarInsList(response.data);
            // console.log("hiii-"+initialValues);
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
                        carInsList.map((car) => {
                            return (
                                <Card style={{ width: '18rem', marginRight: '5px' }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                                    <Card.Body>
                                        <Card.Title>{car.vendorName}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Policy ID: {car.pid}</ListGroup.Item>
                                        <ListGroup.Item>Bought on: {car.startDate}</ListGroup.Item>
                                        <ListGroup.Item >Reg. No.: {car.carRegNo}</ListGroup.Item>
                                        <ListGroup.Item >Premium: ₹ {car.premium}</ListGroup.Item>
                                        <ListGroup.Item>IDV Cover: ₹ {car.idvCover}</ListGroup.Item>

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

export default CarPolicies;