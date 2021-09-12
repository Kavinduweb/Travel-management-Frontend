import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';
import axios from "axios";
import "../../Styles/Guide.css";
import Header from '../Header';
import Footer from '../Footer';

const GuideRequest = ()=>{


    const [tguide,viewGuide] = useState({
        name:"",
        language:"",
        username:"",
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
            guideusername:"",
            uname:"",
            phone:"",
            email:"",
            destination:"",
            tourdate:"",
            noofdates:""
            
    });
 const {guidename,guidelanguage,guideusername,uname,phone,email,destination,tourdate,noofdates}=post;


 const onInputChange = e=>{
     addPost({...post,[e.target.name]: e.target.value});
 };

 const onSubmit=async e =>{
     e.preventDefault();
     const {guidename,guidelanguage,guideusername,uname,phone,email,destination,tourdate,noofdates}=post;
     const {name,language}=tguide;
      
     const data={
        guidename:name,
        guidelanguage:language,
        guideusername:username,
        uname:uname,
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
 const {name,language,username}=tguide;
 return(
     <div>
         <Header/>
    <div className="info">
                <div className="container">
                    <div className="w-50 mx-auto shadow p-5 guide-container">
                        <div className="bodyc">
                            <h2 className ="text-center"><b>Send Request Details</b></h2>
                        </div>

                        <hr/>  

                        <form onSubmit={e=>onSubmit(e)}>
                            <div className="row">
                                <div className="col">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text border-dark" 
                                                id="basic-addon1" 
                                                style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>
                                                Guide Name
                                            </span>
                                        </div>
                                        <input type="text" 
                                        className="form-control border-dark"   
                                        name="guidename"
                                        value={name}
                                        onChange={e=>onInputChange(e)}
                                        disabled/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text border-dark" 
                                                id="basic-addon1" 
                                                style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>
                                                Language
                                            </span>
                                        </div>
                                        <input type="text" 
                                        className="form-control border-dark"   
                                        name="guidelanguage"
                                        value={language}
                                        onChange={e=>onInputChange(e)}
                                        disabled/>
                                    </div>
                                </div>
                            </div>

                            <div className="col" style={{visibility: 'hidden'}}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text border-dark" 
                                                id="basic-addon1" 
                                                style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>
                                                Guide Username
                                            </span>
                                        </div>
                                        <input type="text" 
                                        className="form-control border-dark"   
                                        name="guidename"
                                        value={username}
                                        onChange={e=>onInputChange(e)}
                                        disabled/>
                                    </div>
                                </div>

                            <div className="form-group">
                                <label><b>Name</b></label>
                                    <input type="text" 
                                    className="form-control border-dark" 
                                    placeholder="Enter Your Name"  
                                    name="uname"
                                    value={uname}
                                    onChange={e=>onInputChange(e)}
                                    required/>
                            </div>

                            <div className="form-group">
                                <label><b>Contact Number</b></label>
                                    <input type="text" 
                                    className="form-control border-dark" 
                                    placeholder="Enter Contact Number"  
                                    name="phone"
                                    value={phone}
                                    onChange={e=>onInputChange(e)}
                                    required/>
                            </div>

                            <div className="form-group">
                                <label><b>E-Mail</b></label>
                                    <input type="email" 
                                    className="form-control border-dark" 
                                    placeholder="Enter Your E-Mail"  
                                    name="email"
                                    value={email}
                                    onChange={e=>onInputChange(e)}
                                    required/>
                            </div>

                            <div className="form-group">
                                <label><b>Destination</b></label>
                                    <input type="text" 
                                    className="form-control border-dark" 
                                    placeholder="Enter Your Destination"  
                                    name="destination"
                                    value={destination}
                                    onChange={e=>onInputChange(e)}
                                    required/>
                            </div>

                            <div className="form-group">
                                <label><b>Tour Date</b></label>
                                    <input type="date" 
                                    className="form-control border-dark" 
                                    placeholder="Enter Your Tour Date"  
                                    name="tourdate"
                                    value={tourdate}
                                    onChange={e=>onInputChange(e)}
                                    required/>
                            </div>

                            <div className="form-group">
                                <label><b>Number of Dates</b></label>
                                    <input type="Number" 
                                    className="form-control border-dark" 
                                    placeholder="Enter Number of Dates"  
                                    name="noofdates"
                                    value={noofdates}
                                    onChange={e=>onInputChange(e)}
                                    required/>
                            </div>

                            <br/>

                            <button type="submit" className="btn btn-dark">Send Request</button>   
                        </form>
                    </div>
            <br/><br/>
        </div>
    </div>
    <Footer/>
    </div>
    );

};

export default GuideRequest;
