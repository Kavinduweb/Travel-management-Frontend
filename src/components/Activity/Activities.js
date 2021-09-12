import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import axios from 'axios';

const Activities = () => {
    const [activity, setActivity] = useState([])
    //DELETE ACTIVITY BY ID
    const deleteActivity = id => {
        axios.delete(`http://localhost:8070/activities/delete/${id}`)
            .then(res => alert(res.data))
            setActivity(activity.filter(elem => elem._id !== id));
    }

    const [post, setPosts] =useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:8070/activities")
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  });

    return (
        <MainContainer>
            <div className="info" >
            <div className="container">
            <div className="row my-5">
              <div className="col-sm-2">
                    <Link to="/add-activity" className="btn btn-outline-secondary"><i class="fas fa-plus">&nbsp;Add New Activity</i></Link>
                </div>
                <div className="col-sm-2">
                    <Link to="/activity-select" className="btn btn-outline-secondary">Activity Select Details</Link>
                </div>

                <div className="col-sm-2">
                    <Link to="/activity-details" className="btn btn-outline-secondary">Print Activity Details</Link>
                </div>
                </div>
                </div>
                <div className="container">
                    <Row xs={1} md={3} className="g-4" id="by" className="rounded" >
                        {post.map((activity) => (
                

    <Col><div className="card-group py-3">
    <div className="card" style={{borderRadius: "15px", background: "linear-gradient(90deg, #DDDDDA 0%, #DDDDDA 100%)", width: "60rem"}}>
                    <img src={`/uploads/${activity.activityImage}`} alt="..." style={{width: "100%", minHeight: "40%"}}/>
                    <Link to={{
                        pathname: `/activity/${activity._id}`
                    }}>
                        <h2>{activity.aname}</h2>
                        
                    </Link>
                <h6>{activity.category}</h6><br/>
                <p>{activity.mindescription}</p>
             <br/>
                <p><i class="fas fa-tag">&nbsp;{activity.price}</i></p>

                <div className="row my-5">
                &nbsp;&nbsp;&nbsp;

                    <div className="col-sm-2">
                    <Link to={`/update/${activity._id}`} className="btn btn-outline-success"><i className="far fa-edit">&nbsp;&nbsp;Edit Activity</i></Link>
                </div>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col-sm-2">
                    <button onClick={() =>  deleteActivity(activity._id)}  className="btn btn-outline-danger"><i className="far fa-trash-alt">&nbsp;&nbsp;Delete Activity</i></button>
                </div>
                </div>
                </div></div>
                <hr/>
                </Col>
    ))}
                </Row>
                </div>
           </div>
        </MainContainer>
    )
}

export default Activities;
//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 7rem 0;
    
    .btn btn-outline-success{
    
    }
`;





  