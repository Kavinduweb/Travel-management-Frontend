import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import axios from "axios";

function AddActivity () {

    let history = useHistory();
    const [aname, setActivityName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");


    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    }

    const changeOnClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("aname", aname);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("activityImage", fileName);


        setActivityName("");
        setCategory("");
        setDescription("");
        setPrice("");

        axios.post(`http://localhost:8070/activities/add/`, formData)
            .then(res => setMessage(res.data))
            .catch(err => {
                console.log(err);
            });

            history.push("/activities");
            alert(" Activity Added Successful")
    };

    return (
        <AddActivityContainer>
            <div className="info">
            <div className="container">
                     
                <div className="flex-parent jc-center">
                <Link to="/activities" type="submit" className="btn btn-outline-secondary">Back to Activity</Link>
                </div>
                <h1>Add New Activity </h1>
                <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="aname">Activity Name</label>
    <input 
    type="text" 
    value={aname}
    onChange={e => setActivityName(e.target.value)}
    className="form-control" 
    placeholder="Activity Name"/>
  </div>

  <div className="form-group">
    <label htmlFor="category">Category</label>
    <input 
    type="text" 
    value={category}
    onChange={e => setCategory(e.target.value)}
    className="form-control" placeholder="Category"/>
  </div>

  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea 
    value={description}
    onChange={e => setDescription(e.target.value)}
    className="form-control" rows="10"></textarea>
  </div>
  
  <div className="form-group">
    <label htmlFor="price">Price</label>
    <input 
    type="text"
    value={price} 
    onChange={e => setPrice(e.target.value)}
    className="form-control" placeholder="Price"/>
  </div>

        <div className="form-group">
            <label htmlFor="file">Choose activity image</label>
            <input type="file" filename="activityImage" className="form-control-file"
            onChange={onChangeFile}
            />
            </div>

            <div className="row">
 
      <div className="flex-parent jc-center">
  <button type="submit" className="btn btn-primary">Post Activity</button>
  </div>
      </div> 
</form>
</div>
</div>
</AddActivityContainer>
    );
};

export default AddActivity;

//MAIN CONTAINER
const AddActivityContainer = styled.div`
margin: 3rem auto;
padding: 4rem;
width: 65.25rem;

h1 {
    font-weight: 900;
    color: #339966;
}

.btn-primary {
    margin-top: 2rem;
    background: #008000;
    width: 8.25rem;
    height: 2.25rem;
    border:none;     
    &:hover {
        background: #00ff99;
        justify-content: center;
    }
}

.btn-outline-secondary {
    margin-top: 2rem;
    width: 9.25rem;
    height: 2.25rem; 
    align: right; 
    &:hover {
        background: #00ff99;
        display: flex;
    }
}

.message {
    font-weight: 900;
    color: #cc0000;
    padding: 1rem 1rem 1rem 0;
}
`;