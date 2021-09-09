import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";

const Activity = (props) => {
    const [aname, setActivityName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        //REQUEST THE DATA FROM A SERVER AND SET DATA TO ACTIVITY ARRAY
        axios
        .get(`http://localhost:8070/activities/${props.match.params.id}`)
        .then(res => [
            setActivityName(res.data.aname),
            setCategory(res.data.category),
            setDescription(res.data.description),
            setPrice(res.data.price),
            setFileName(res.data.activityImage),
        ])
        .catch(error => console.log(error));
    }, []);

    return (
    <MainContainer>
        <div className="info">
        <img src={`/uploads/${fileName}`} alt="..." style={{margin: "0 auto", width: "40%", display:"flex"}}/>
    <h2>{aname}</h2>
    <h6>{category}</h6>
    <p>{description}</p>
    <p>{price}</p>
    <br/>

    <Link to="/" type="submit" className="btn btn-primary">Back to Activity Page</Link>
        </div>
        </MainContainer>
    )
};

export default Activity;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2 {
        text-align: center;
        font-weight: 900;
        color:  #008000;
    }

    .btn-primary {
        background: #008000;
        width: 10.25rem;
        height: 2.25rem;
        border:none;     
        &:hover {
            background: #00ff99;
        }
    }
`;
