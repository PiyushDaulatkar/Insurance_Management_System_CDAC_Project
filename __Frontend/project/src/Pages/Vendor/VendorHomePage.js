import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import VendorCar from "./Policies/VendorCar";
import VendorHealth from './Policies/VendorHealth';
import VendorHome from './Policies/VendorHome';
import VendorTravel from './Policies/VendorTravel';

function VendorHomePage() {
    const [insurance,setInsurance]=useState('car');
    function handleClick(intype){
        // window.location.reload(false);
        console.log(intype);
        setInsurance(intype);
    }
    // window.location.reload(false);
    console.log(insurance);
    return (
        <div class="container text-center" style={{ marginTop: '40px' }}>
            <div class="row">
            <h2 style={{textAlign:'left'}}>Policies added by you are:</h2>
                <Card>
                
                    <Card.Header>
                        
                        <Nav variant="pills" defaultActiveKey="xyz" /* className='bg-dark' */>
                            
                            <button className={`btn btn-dark btn-md btn-block ${insurance=='car'?'bg-dak':'bg-secondary'}`} 
                            style={{marginRight:'7px'}} onClick={()=>handleClick('car')} 
                            insurance={'car'}>Car</button>

                            <button className={`btn btn-dark btn-md btn-block ${insurance=='health'?'bg-dak':'bg-secondary'}`} 
                            style={{marginRight:'7px'}} onClick={()=>handleClick('health')} 
                            insurance={'health'}>Health</button>

                            <button className={`btn btn-dark btn-md btn-block ${insurance=='home'?'bg-dak':'bg-secondary'}`} 
                            style={{marginRight:'7px'}} onClick={()=>handleClick('home')} 
                            insurance={'home'}>Home</button>

                            <button className={`btn btn-dark btn-md btn-block ${insurance=='travel'?'bg-dak':'bg-secondary'}`} 
                            style={{marginRight:'7px'}} onClick={()=>handleClick('travel')} 
                            insurance={'travel'}>Travel </button>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        {(insurance=="car")?<VendorCar/>:null}
                        {(insurance=="home")?<VendorHome/>:null}
                        {(insurance=="travel")?<VendorTravel/>:null}
                        {(insurance=="health")?<VendorHealth/>:null}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default VendorHomePage;