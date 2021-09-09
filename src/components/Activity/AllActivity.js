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
  <div className="card">
    <img className="card-img-top" src={`/uploads/${activity.activityImage}`} alt="..." style={{width: "100%", minHeight: "40%"}}/>
    <div className="card-body">
      <h5 className="card-title">{activity.aname}</h5>
      <h6 className="card-title">{activity.category}</h6>
      <p className="card-text">{activity.price}</p>
	 <Link to={`/view-activity/${activity._id}`} className="btn btn-primary">View more</Link>
    </div>
  </div>
</div>
</Col>
    ))}
</Row>   
                    <hr />
                </div>
                
            )
            </div>
        </MainContainer>
    );
            
};

export default Activities;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 7rem 0;
   
`;