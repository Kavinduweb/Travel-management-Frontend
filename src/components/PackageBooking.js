import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";

const PackageBooking = ()=>{


    let history = useHistory();

    const [post,addPost] = useState({
            name:"",
            phone:"",
            address:"",
            email:"",
            joinplace:""
            
    });
 const {name,phone,address,email,joinplace}=post;
 const onInputChange = e=>{
     addPost({...post,[e.target.name]: e.target.value});
 };

 const onSubmit=async e =>{
     e.preventDefault();
     await axios.post ("http://localhost:8070/packagebooking/add",post);
     history.push("/");
     alert(" Package Booking Added")
 }

 return(
    <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className ="text- mb-10">Booking Travel Package</h2>
            <hr/>   <br></br>
    <form onSubmit={e=>onSubmit(e)}>
  <div class="form-group">
     <h6>Customer Name</h6>
      <input
         type = "text"
         className="form-control form-control-lg"
         placeholder="Enter your Name"
         name="name"
         value={name}
         onChange={e=>onInputChange(e)}
      />
   </div>

   <div class="form-group">
     <h6>Contact Number</h6>
      <input
         type = "text"
         className="form-control form-control-lg"
         placeholder="Enter your phone number"
         name="phone"
         value={phone}
         onChange={e=>onInputChange(e)}
      />
   </div>

   <div class="form-group">
     <h6>Customer Address</h6>
      <input
         type = "text"
         className="form-control form-control-lg"
         placeholder="Enter your address"
         name="address"
         value={address}
         onChange={e=>onInputChange(e)}
      />
   </div>

   <div class="form-group">
     <h6>Customer email</h6>
      <input
         type = "text"
         className="form-control form-control-lg"
         placeholder="Enter your email"
         name="email"
         value={email}
         onChange={e=>onInputChange(e)}
      />
   </div>

   <div class="form-group">
     <h6>Where do you Join</h6>
      <input
         type = "text"
         className="form-control form-control-lg"
         placeholder="Enter your join place"
         name="joinplace"
         value={joinplace}
         onChange={e=>onInputChange(e)}
      />
   </div>

   <button type="submit" class="btn btn-primary">Book Now</button>
    
    </form>
    </div>

    </div>
    );

};

export default PackageBooking;
