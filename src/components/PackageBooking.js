import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import '../Styles/TravelPackage.css'

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
     history.push("/travelpackages");
     alert(" Your Booking Details has been Recorded Successfully")
 }

 return(
  
    <div className="bodyaa"> 
    
       <div className="bodybb">
    <div className="container">
    
        <div className="w-70 mx-auto shadow p-5">
        <div className="bodycc">
            <h2 className ="text- mb-10"><b>Booking Travel Package</b></h2>
            </div>
            <hr/>  
           
            <form onSubmit={e=>onSubmit(e)}>

                <div className="form-group">
                    <label><b>Name</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Name"  name="name"
         value={name}
         onChange={e=>onInputChange(e)}/>
                </div>

                <div className="form-group">
                    <label><b>Phone</b></label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number"  name="phone"
         value={phone}
         onChange={e=>onInputChange(e)}/>
                </div>

   <div className="form-group">
                    <label><b>Address</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Address"  name="address"
         value={address}
         onChange={e=>onInputChange(e)}/>
                </div>
   <div className="form-group">
                    <label><b>Email</b></label>
                    <input type="text" className="form-control" placeholder="Enter E-mail"  name="email"
         value={email}
         onChange={e=>onInputChange(e)}/>
                </div>
   <div className="form-group">
                    <label><b>Join Place</b></label>
                    <input type="text" className="form-control" placeholder="Where do you join"  name="joinplace"
         value={joinplace}
         onChange={e=>onInputChange(e)}/>
                </div>
               <br/>

                <button type="submit" className="btn btn-danger">Book Now</button>
               
            </form>
            </div>
</div>
</div>
</div>

    
    );

};

export default PackageBooking;
