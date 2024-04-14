import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Image } from 'react-bootstrap';
import carimg from '../Images/car.png';
import healthimg from '../Images/health.png';
import travelimg from '../Images/travel.png';
import homeimg from '../Images/home.png';
function InsuranceCard(props) {
    return (
        // string imgName=""./"+ {props.img} + ".jpg" 
        <div style={{ marginLeft: 0, marginTop: 50 }}>
            <Card style={{ width: '14rem' }}>
                {props.name=='Car' ? <Card.Img variant="top" src={carimg} 
                />:null}
                {props.name=='Health' ? <Card.Img variant="top" src={healthimg} />:null}
                {props.name=='Travel' ? <Card.Img variant="top" src={travelimg} />:null}
                {props.name=='Home' ? <Card.Img variant="top" src={homeimg} />:null}
                <Card.Body>
                    {/* <Card.Title>{props.name} Insurance</Card.Title> */}
                    {/* <Card.Text>
                        {props.name} Insurance for everyone!
                    </Card.Text> */}
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
                <Card.Body>
                    <Button href={props.link} className="btn btn-dark btn-md btn-block">{props.name} Insurance</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default InsuranceCard;