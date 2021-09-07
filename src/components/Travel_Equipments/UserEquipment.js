import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const AdminEquipment = () => {
    const [equipments, setEquipment] = useState([]);

    useEffect(() => {
        loadEquipments();
    }, []);

    const loadEquipments = async () => {
        const result = await axios.get("http://localhost:8070/equipment");
        setEquipment(result.data);
    };

    return (
        <div>

<div className="rightsearch">
  
  <div class="input-group" >
<div class="form-outline">

<input 
id="search-input" 
type="search" 
id="form1" 
class="form-control" 
placeholder="Search Equipment"

/>
</div>

<button id="search-button" type="button" class="btn btn-primary">
<i class="fas fa-search"></i>
</button>

</div>
</div>

            <Row xs={1} md={3} className="g-4" id="by" class="rounded" >
  {equipments.map((equipment, idx) => (
   
    <Col >
  
      <Card >
      <div className="cdbody">
        <Card.Img variant="top"  id="cardimg" />
        <Card.Body>
        
          <Card.Title> {equipment.name}<br/>
          </Card.Title>
          <Card.Text>
       
          {equipment.description}<br/> <br/>
          <h6 class="card-text"><b>{equipment.price}</b></h6>
       <button type="button" class="btn btn-primary" id="cardbtn">
 
     <a href ={("//////////")} style={{textDecoration:'none',color:'white'}}> BUY</a></button>
 
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
 
    </Col>
   
  ))}
</Row>
        </div>

    );
};

export default AdminEquipment;