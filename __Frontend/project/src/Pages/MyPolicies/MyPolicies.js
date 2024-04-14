import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import CarPolicies from './CarPolicies';
import HomePolicies from './HomePolicies';
import TravelPolicies from './TravelPolicies';
import HealthPolicies from './HealthPolicies';

function MyPolicies() {
    const [insurance,setInsurance]=useState('car');
    function handleClick(intype){
        console.log(intype);
        setInsurance(intype);
    }
    console.log(insurance);
    return (
        <div class="container text-center" style={{ marginTop: '40px' }}>
            <div class="row">
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
                        {(insurance=="car")?<CarPolicies/>:null}
                        {(insurance=="home")?<HomePolicies/>:null}
                        {(insurance=="travel")?<TravelPolicies/>:null}
                        {(insurance=="health")?<HealthPolicies/>:null}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default MyPolicies;