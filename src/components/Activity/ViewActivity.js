import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const ViewActivity = props => {
    const [aname, setActivityName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:8070/activities/${props.match.params.id}`)
        .then((res) => [
            setActivityName(res.data.aname),
            setCategory(res.data.category),
            setDescription(res.data.description),
            setPrice(res.data.price),
            setFileName(res.data.activityImage)
        ])
        .catch((error) => console.log(error));
    }, []);

//console.log(props);
    return (
        (<ActivityContainer>
            <div className="info">
             <div className="container" >
            <div className="row my-5">
                
              <div className="col-sm-2">

              <Link to = "/all" type="submit" className="btn"><i class="fas fa-hand-point-left">&nbsp;&nbsp;Back</i></Link>
                </div>
                
                </div>
                </div>
                <h2>{aname}</h2>
            <img src={`/uploads/${fileName}`} alt="..." style={{margin: "0 auto", width: "60%", display: "flex"}}/>
        <br/><br/>
        <h5>{category}</h5><br/>
        <p>{description}</p>
        <p><i className="fas fa-tag">{price}</i></p>
        <br/>
        <div class="grid gap-5 grid-cols-5">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/activity-user/${props.match.params.id}`} className="btn btn-outline-secondary">Select Activity</Link>
        </div>
        </div>
        </ActivityContainer>

        )
    );
};

export default ViewActivity;

//MAIN CONTAINER
const ActivityContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2 {
        text-align: center;
        font-weight: 900;
        color: 	#0f80aa;
    }

    .btn {
        background: #a5a5a5;
        border: none;
        &:hover {
            background: #aeb4a9;
        }
    }
 
`;