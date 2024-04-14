import { Button, NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const serverUrl = "http://localhost:8080/travelinsurance";

function TravelCard(props) {
    const navigate = useNavigate();
    var travelForm = JSON.parse(window.localStorage.getItem("travelForm"));
    var values = {
        "startDate": new Date(),
        "destination": travelForm.Destination,
        "duration": travelForm.duration,
        "noOfTravlers": travelForm.noOfTravlers,
        "vendorName": props.vendorName,
        "vendorId": props.vendorId,
        "premium": props.premium,
        "idvCover": props.idvCover,
        "claimSetted": props.claimsSettled,
        "addOns": props.addOns,
        "clientId": window.localStorage.getItem("clientId")
    }
    var handleClick = () => {
        // console.log(values);
        // console.log(carForm);
        axios.post(serverUrl, values).then((response) => {
            console.log("hurrayyyy!!!!")
            if (response.data == true) {
                console.log("hurrayyyy!!!!")
                console.log(response.data);
                console.log(response);
                alert("Insurance bought successfully!");
                // const token = '12345';
                // storeTokenInLS(token);
                navigate('/home')
                // setSubmitted(true);
                // temp = true;
            }
            else {
                alert("Something went wrong!");
            }
        });
        // console.log(temp);
        // action.resetForm();
        // e.preventDefault();
        // if (response.body.isEmailValid) {
        // setSubmitted(true);
        // }
        // else setSameEmail(true);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title>{props.vendorName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cover: ₹ {props.idvCover}</ListGroup.Item>
                    <ListGroup.Item >Claims Settled: {props.claimsSettled}</ListGroup.Item>
                    <ListGroup.Item >{props.addOnns}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button onClick={handleClick} >Buy @ ₹ {props.premium}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TravelCard;