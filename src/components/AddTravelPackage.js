import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";

const CreatePost = ()=>{

     let history = useHistory();

    const [post,addPost] = useState({
            packageName:"",
            destination:"",
            district:"",
            date:"",
            noofdays:"",
            noofnights:"",
            vehical:"",
            perperson:""
    });
 const {packageName,destination,district,date,noofdays,noofnights,vehical,perperson}=post;
 const onInputChange = e=>{
     addPost({...post,[e.target.name]: e.target.value});
 };

 const onSubmit=async e =>{
     e.preventDefault();
     await axios.post ("http://localhost:8070/travelpackages/admin/add",post);
     history.push("/travelpackages");
     alert(" Travel Package Added")
 }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className ="text- mb-10">Add New Travel Package</h2>
                <hr/>   <br></br>
        <form onSubmit={e=>onSubmit(e)}>
      <div class="form-group">
         <h6>Package Name</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter Package Name"
             name="packageName"
             value={packageName}
             onChange={e=>onInputChange(e)}
          />
       </div>

       <div class="form-group">
       <h6>Destination</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter Destination"
             name="destination"
             value={destination}
             onChange={e=>onInputChange(e)}
          />
       </div>

       <div class="form-group">
       <h6>District</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter District"
             name="district"
             value={district}
             onChange={e=>onInputChange(e)}
          />
       </div>

       <div class="form-group">
       <h6>Date</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter Date"
             name="date"
             value={date}
             onChange={e=>onInputChange(e)}
          />
       </div>

       <div class="form-group">
       <h6>No of Days</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter no of Days"
             name="noofdays"
             value={noofdays}
             onChange={e=>onInputChange(e)}
          />
       </div>

       <div class="form-group">
       <h6>No of Nights</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter No of Nights"
             name="noofnights"
             value={noofnights}
             onChange={e=>onInputChange(e)}
          />
       </div>

       <div class="form-group">
       <h6>Vehical</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter Vehical"
             name="vehical"
             value={vehical}
             onChange={e=>onInputChange(e)}
          />
       </div>

       <div class="form-group">
       <h6>Per Person</h6>
          <input
             type = "text"
             className="form-control form-control-lg"
             placeholder="Enter Per Person"
             name="perperson"
             value={perperson}
             onChange={e=>onInputChange(e)}
          />
       </div>



    <button type="submit" class="btn btn-primary">Add Package</button>
    
    </form>
    </div>
    </div>
    );
};

export default CreatePost;