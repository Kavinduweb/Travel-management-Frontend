import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';
import axios from "axios";
import '../../Styles/TravelPackage.css'

const PackageBooking = ()=>{


    const [tpackage,viewPackage] = useState({
        packageName:"",
        destination:"",
        discription:"",
        date:"",
        noofdays:"",
        noofnights:"",
        vehical:"",
        perperson:""
      });

      const {id}=useParams();

const loadPackage = async()=>{
    const res = await axios.get(
        (`http://localhost:8070/travelpackages/admin/${id}`)
    );
    viewPackage(res.data.post);
};
useEffect(()=>{
    loadPackage();
})

    let history = useHistory();

    const [post,addPost] = useState({
            packagename:"",
            price:"",
            name:"",
            phone:"",
            address:"",
            email:"",
            joinplace:""
            
    });
 const {packagename,price,name,phone,address,email,joinplace}=post;


 const onInputChange = e=>{
     addPost({...post,[e.target.name]: e.target.value});
 };

 const onSubmit=async e =>{
     e.preventDefault();
     const {packagename,price,name,phone,address,email,joinplace}=post;
     const {packageName,perperson}=tpackage;
      
     const data={
        packagename:packageName,
        price:perperson,
        name:name,
          phone:phone,
          address:address,
          email:email,
          joinplace:joinplace
     }

     await axios.post ("http://localhost:8070/packagebooking/add",data);
     alert("Booking Added Successfull. Click Ok to Pay")
     history.push("/payment/add");
    
 }
 const {packageName,perperson}=tpackage;
 return(
    <div className="infotr">
    <div className="bodyaa"> 
    
       <div className="bodybb">
    <div className="container">
    
        <div className="w-70 mx-auto shadow p-5">
        <div className="bodycc">
            <h2 className ="text- mb-10"><b>Booking Travel Package</b></h2>
            </div>
            <hr/>  

           
            <form onSubmit={e=>onSubmit(e)}>

        
            <div class="row">
    <div class="col">

            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Package Name</span>
  </div>

  <input type="text" className="form-control"   name="packagename"
         value={packageName}
         onChange={e=>onInputChange(e)}
         disabled/>

</div></div>
<div class="col">
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Price</span>
  </div>

  <input type="text" className="form-control"   name="price"
         value={perperson}
         onChange={e=>onInputChange(e)}
         disabled/>

</div></div></div>




                <div className="form-group">
                    <label><b>Name</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Name"  name="name"
         value={name}
         onChange={e=>onInputChange(e)}
         required/>
                </div>


                <div className="form-group">
                    <label><b>Phone</b></label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number"  name="phone"
         value={phone}
         onChange={e=>onInputChange(e)}
         required/>
                </div>

   <div className="form-group">
                    <label><b>Address</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Address"  name="address"
         value={address}
         onChange={e=>onInputChange(e)}
         required/>
                </div>
   <div className="form-group">
                    <label><b>Email</b></label>
                    <input type="email" className="form-control" placeholder="Enter E-mail"  name="email"
         value={email}
         onChange={e=>onInputChange(e)}
         required/>
                </div>
   <div className="form-group">
                    <label><b>Join Place</b></label>
                    <input type="text" className="form-control" placeholder="Where do you join"  name="joinplace"
         value={joinplace}
         onChange={e=>onInputChange(e)}
         required/>
                </div>
               <br/>

                <button type="submit" class="btn btn-danger btn-block" > Book Now</button>
               
            </form>
            </div>
</div>
</div>
<br/><br/>
</div>
</div>

    
    );

};

export default PackageBooking;
