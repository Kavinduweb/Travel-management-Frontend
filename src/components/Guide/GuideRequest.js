import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';
import axios from "axios";

const GuideRequest = ()=>{


    const [tguide,viewGuide] = useState({
        name:"",
        language:"",
      });

      const {id}=useParams();

const loadGuide = async()=>{
    const res = await axios.get(
        (`http://localhost:8070/guide/${id}`)
    );
    viewGuide(res.data.guide);
};
useEffect(()=>{
    loadGuide();
})

    let history = useHistory();

    const [post,addPost] = useState({
            guidename:"",
            guidelanguage:"",
            uname:"",
            phone:"",
            email:"",
            destination:"",
            tourdate:"",
            noofdates:""
            
    });
 const {guidename,guidelanguage,uname,phone,email,destination,tourdate,noofdates}=post;


 const onInputChange = e=>{
     addPost({...post,[e.target.name]: e.target.value});
 };

 const onSubmit=async e =>{
     e.preventDefault();
     const {guidename,guidelanguage,uname,phone,email,destination,tourdate,noofdates}=post;
     const {name,language}=tguide;
      
     const data={
        guidename:name,
        guidelanguage:language,
        uname:name,
        phone:phone,
        email:email,
        destination:destination,
        tourdate:tourdate,
        noofdates:noofdates
     }

     await axios.post ("http://localhost:8070/guiderequest/add",data);
     alert("Request sent successfully!")
     history.push("/");
    
 }
 const {name,language}=tguide;
 return(
    <div className="infotr">
    <div className="bodyaa"> 
    
       <div className="bodybb">
    <div className="container">
    
        <div className="w-70 mx-auto shadow p-5">
        <div className="bodycc">
            <h2 className ="text- mb-10"><b>send request</b></h2>
            </div>
            <hr/>  

           
            <form onSubmit={e=>onSubmit(e)}>

        
            <div class="row">
    <div class="col">

            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Guide Name</span>
  </div>

  <input type="text" className="form-control"   name="guidename"
         value={name}
         onChange={e=>onInputChange(e)}
         disabled/>

</div></div>
<div class="col">
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Price</span>
  </div>

  <input type="text" className="form-control"   name="guidelanguage"
         value={language}
         onChange={e=>onInputChange(e)}
         disabled/>

</div></div></div>




                <div className="form-group">
                    <label><b>Name</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Name"  name="uname"
         value={uname}
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
                    <label><b>Email</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your email"  name="email"
         value={email}
         onChange={e=>onInputChange(e)}
         required/>
                </div>
   <div className="form-group">
                    <label><b>Destination</b></label>
                    <input type="email" className="form-control" placeholder="Enter destination"  name="destination"
         value={destination}
         onChange={e=>onInputChange(e)}
         required/>
                </div>
   <div className="form-group">
                    <label><b>Tour Date</b></label>
                    <input type="text" className="form-control" placeholder="Where do you join"  name="tourdate"
         value={tourdate}
         onChange={e=>onInputChange(e)}
         required/>
                </div>

    <div className="form-group">
                    <label><b>No of Dates</b></label>
                    <input type="text" className="form-control" placeholder="Where do you join"  name="noofdates"
         value={noofdates}
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

export default GuideRequest;
