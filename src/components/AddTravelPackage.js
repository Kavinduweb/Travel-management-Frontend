import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import '../Styles/TravelPackage.css'

const CreatePackage = ()=>{

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
     history.push("/travelpackages/admin");
     alert(" Travel Package Added")
 }

    return(
        <div id="bodytbc">
           <div >
            <div >
                
                <form class="signup-form" onSubmit={e=>onSubmit(e)} >
     
     <div class="form-header">
        <h1 style={{color:"white"}}><b>Add New Travel Package</b></h1>
     </div>

     <div class="form-body">


    <div class="form-group">   
     <lable class="label-title"><b>Package Name *</b></lable>
       <input type="text" name="packageName" class="form-input" placeholder="packageName"
       value={packageName}
       onChange={e=>onInputChange(e)} required="required"  /><br/>
      </div>


      <div class="form-group">   
     <lable class="label-title"><b>destination *</b></lable>
       <input type="text" name="destination" class="form-input" placeholder="destination"
       value={destination}
       onChange={e=>onInputChange(e)} required="required" /><br/>
      </div>


      <div class="horizontal-group">

     <div class="form-group left">
       <lable class="label-title"><b>district *</b></lable>
       <input type="text" name="district" class="form-input" placeholder="district"
       value={district}
       onChange={e=>onInputChange(e)} required="required" /><br/>
     </div> 
     
      <div class="form-group right">
        <lable class="label-title"><b>date *</b></lable>
       <input type="text" name="date"  class="form-input" placeholder="date"
       value={date}
       onChange={e=>onInputChange(e)} required="required" /><br/>
      </div>
      
     </div>


      <div class="horizontal-group">

     <div class="form-group left">
       <lable class="label-title"><b>noofdays *</b></lable>
       <input 
       type="text" 
       name="noofdays"  
       class="form-input" 
       placeholder="noofdays"
       maxLength="3"
       value={noofdays}
       required="required"
       onChange={e=>onInputChange(e)}  /><br/>
     </div> 
     
      <div class="form-group right">
        <lable class="label-title"><b>noofnights *</b></lable>
       <input type="text" name="noofnights"  class="form-input" placeholder="noofnights"
       value={noofnights} maxLength="3" required="required"
       onChange={e=>onInputChange(e) } /><br/>
      </div>
      
     </div>



       <div class="horizontal-group">

     <div class="form-group left">
       <lable class="label-title"><b>vehical *</b></lable>
       <input type="text" required="required" name="vehical"  class="form-input" placeholder="vehical"
       value={vehical}
       onChange={e=>onInputChange(e)}  /><br/>
     </div> 
     
      <div class="form-group right">
        <lable class="label-title"><b>perperson *</b></lable>
       <input type="text" name="perperson" required="required" class="form-input" placeholder="perperson"
       value={perperson}
       onChange={e=>onInputChange(e)}  /><br/>
      </div>
      
     </div>

        <div class="form-footer">
      
       <input type="submit" name="submit" class="reg" value="Add Package"/>
      </div>
<br/>
     </div>  
     
     <br/> 
     </form>


   
   
</div></div></div>
    );
};

export default CreatePackage;