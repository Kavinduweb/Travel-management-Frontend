import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";

const AdminAddPackage = ()=>{

     let history = useHistory();

     const[roomType,setroomType]=useState("");
     const[details,setdetails]=useState("");
     const[price,setprice]=useState("");
     const[size,setsize]=useState("");
     const[maxCapacity,setmaxCapacity]=useState("");
     const[message,setMessage]=useState("");
     const[packageImage,setFileName]=useState("");
   
     const onChangeFile= e=>{
         setFileName(e.target.files[0]);
     }
   
   const changeOnClick =(e)=>{
       e.preventDefault();
   
       const formData=new FormData();
       formData.append("roomType",roomType);
       formData.append("details",details);
       formData.append("price",price);
       formData.append("size",size);
       formData.append("maxCapacity",maxCapacity);
       formData.append("packageImage",packageImage);
   
       setroomType("");
       setdetails("");
       setprice("");
       setsize("");
       setmaxCapacity("");
       
   
       axios
       .post("http://localhost:8070/hotelpackage/add",formData)
       .then(
        (res)=>setMessage(res.data))
        
       .catch((err)=>{
           console.log(err);
       });
       history.push("/adminhotelpackage");
       alert(" Hotel Package Added Successful")
   };
        return(
            <div className="info">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New room</h1>
                <form className="needs-validation" onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Room Type</label>
                        <input type="text"
                        className="form-control"
                        placeholder="Room Type"
                        name="roomType"
                        value={roomType}
                        onChange={(e)=>setroomType(e.target.value)}
                        required/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Details</label>
                        <input type="text"
                        className="form-control"
                        placeholder="Room Details"
                        name="details"
                        value={details}
                        onChange={(e)=>setdetails(e.target.value)}
                        required/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Price</label>
                        <input type="text"
                        className="form-control"
                        placeholder="price"
                        name="price"
                        value={price}
                        onChange={(e)=>setprice(e.target.value)}
                        required/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Size</label>
                        <input type="text"
                        className="form-control"
                        placeholder="Room Size"
                        name="size"
                        value={size}
                        onChange={(e)=>setsize(e.target.value)}
                        required/>
                    </div>

                    <div className="from group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>max Capacity</label>
                        <input type="text"
                        className="form-control"
                        placeholder="Max Capacity"
                        name="maxCapacity"
                        value={maxCapacity}
                        onChange={(e)=>setmaxCapacity(e.target.value)}
                        required/>
                    </div>

                    <lable class="label-title"><b>Add a Image*</b>
       <div class="mb-3">
  <input class="form-control" type="file" id="formFile" filename="packageImage" onChange={onChangeFile}/>
</div></lable>


<button className="btn btn-success" type="submit" style={{marginTop:'15px'}} >
    <i className="far fa-check-square"></i>
    &nbsp; Confirm
</button>

                </form>
            </div>
            </div>
        )
}
        

        export default AdminAddPackage;