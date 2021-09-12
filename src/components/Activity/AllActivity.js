import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios'; 

const Activities = () => {

    const [posts, setPosts] =useState([]);
    
    useEffect(() => {
      axios
      .get("http://localhost:8070/activities")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
    });

    return (
     <MainContainer>

            <div className="info"> 
<div className="container">

    <Row xs={1} md={3} className="g-4" id="by" className="rounded" >
    {posts.map((activity) => (
              
          
    <Col>
                
<div className="card-group py-3">
  <div className="card" style={{borderRadius: "15px", background: "linear-gradient(90deg, #edeec9 0%, #e8e8e4 100%)", width: "20rem"}}>
    <img className="card-img-top" src={`/uploads/${activity.activityImage}`} alt="..." style={{width: "100%", minHeight: "40%", hover: "hoverable"}}/>
    <div className="card-body" >
      <h5 className="card-title">{activity.aname}</h5>
      <h6 className="card-title text-muted">{activity.category}</h6>
      <p className="card-title">{activity.mindescription}</p>
      <p className="card-text"><i className="fas fa-tag">{activity.price}</i></p>
	 <Link to={`/view-activity/${activity._id}`} className="btn btn-primary">View more</Link>



    </div>
  </div>
	</div> 
</Col>
    ))}
</Row>   
                    <hr />
                </div>
                </div>

        </MainContainer>
);
            
};

export default Activities;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 7rem 0;
    .card {
      transition: border-color 1s, box-shadow 0.5s;
    }
   .card:hover {
     border-color: rgba(13, 110, 253, 0.7);
     box-shadow: 0px 0px 10px 2px rgba(13, 110,253, 0.6);
   }


  
`;
