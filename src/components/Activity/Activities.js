import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
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
            <div className="info">
            <div className="container" >
            <div className="row my-5">
              <div className="col-sm-2">
                    <Link to="/add-activity" className="btn btn-outline-secondary">+Add New Activity</Link>
                </div>
                </div>
                </div>
            {post.map((activity, key) => (
                <div className="container" key={key}>
                    <img src={`/uploads/${activity.activityImage}`} alt="..." style={{width: "40%"}}/>
                    <Link to={{
                        pathname: `/activity/${activity._id}`
                    }}>
                        <h2>{activity.aname}</h2>
                        
                    </Link>
                <h6>{activity.category}</h6>
             
                <p>{activity.price}</p>

                <div className="row my-5">
                    <div className="col-sm-2">
                    <Link to={`/update/${activity._id}`} className="btn btn-outline-success">Edit Activity</Link>
                </div>

                <div className="col-sm-2">
                    <button onClick={() => deleteActivity(activity._id)} className="btn btn-outline-danger">Delete Activity</button>
                </div>
                </div>
                <hr/>
                </div>
            ))}
            </div>
        </MainContainer>
    )
}

export default Activities;
//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 7rem 0;

`;





  