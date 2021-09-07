import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import pb from '../../Images/pb.jpg'

const AdminEquipment = () => {
    const [equipments, setEquipment] = useState([]);

    useEffect(() => {
        loadEquipments();
    }, []);

    const loadEquipments = async () => {
        const result = await axios.get("http://localhost:8070/equipment");
        setEquipment(result.data);
    };

    const deleteEquipment = async id => {
        await axios.delete(`http://localhost:8070/equipment/delete/${id}`);
        alert ("Successfully Deleted");
        loadEquipments();
      };
    const { id } = useParams();
    return (
        <div>  
                <div><Link class="btn btn-primary mr-2" to="/equipment/add" style={{float:"right"}}>
                    Add Equipment
                  </Link></div> <br/> <br/> <br/> 
                  <Row xs={1} md={1} className="g-4" id="by" class="rounded" style={{maxHeight:"250px", maxWidth:"65%"}} >
          {equipments.map((equipment, idx) => (
          

<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-2"><br/>
      <img src={pb} class="img-fluid rounded-start" style={{maxHeight:"200px", maxWidth:"200px"}} />
    </div>
    <div class="col-md-10">
      <div class="card-body"> <br/>
        <h5 class="card-title">{equipment.name}</h5> 
        <p class="card-text">{equipment.description}</p>
        <h6 class="card-text"><b>{equipment.price}</b></h6>
                  <Link style={{float:"right"}}
                    class="btn btn-danger"
                    onClick={() => deleteEquipment(equipment._id)}
                  >
                    Delete
                  </Link>

                  <Link style={{float:"right"}}
                    class="btn btn-outline-primary mr-2"
                    to={`/equipment/edit/${equipment._id}`}
                  >
                    Edit
                  </Link>
      </div>
    </div>
  </div>
</div>

         
           
          ))}
        </Row> <br/> <br/> <br/> <br/>
                </div>
    );
};

export default AdminEquipment;