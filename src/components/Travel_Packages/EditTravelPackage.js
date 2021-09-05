import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';
import axios from "axios";
import '../../Styles/TravelPackage.css'

const EditPackage = ()=>{

     let history = useHistory();
     const {id}=useParams();

    const [post,addPost] = useState({
            packageName:"",
            destination:"",
            discription:"",
            date:"",
            noofdays:"",
            noofnights:"",
            vehical:"",
            perperson:""
    });
 const {packageName,destination,discription,date,noofdays,noofnights,vehical,perperson}=post;
 const onInputChange = e=>{
     addPost({...post,[e.target.name]: e.target.value});
 };

 const onSubmit=async e =>{
     e.preventDefault();
     await axios.put(`http://localhost:8070/travelpackages/admin/update/${id}`,post);
     history.push("/travelpackages/admin");
     alert(" Travel Package Updated Successful")
 }

 const loadPackage = async()=>{
    const res = await axios.get
        (`http://localhost:8070/travelpackages/admin/${id}`)
        addPost(res.data.post)
      }
      useEffect(()=>{
        loadPackage();
    },[]);
    
return(

   <div >
   <div >
    <div >
        
        <form class="signup-form" onSubmit={e=>onSubmit(e)}>

<div class="form-header">
<h1 style={{color:"white"}}><b>Edit Travel Package</b></h1>
</div>

<div class="form-body">


<div class="form-group">   
<lable class="label-title"><b>Package Name *</b></lable>
<input type="text" name="packageName" class="form-input" placeholder="packageName"
value={packageName}
onChange={e=>onInputChange(e)}  /><br/>
</div>


<div class="form-group">   
<lable class="label-title"><b>Destination *</b></lable>
<input type="text" name="destination" class="form-input" placeholder="destination"
value={destination}
onChange={e=>onInputChange(e)}  /><br/>
</div>


<div class="horizontal-group">

<div class="form-group left">
<lable class="label-title"><b>Discription *</b></lable>
<input type="text" name="discription" class="form-input" placeholder="discription"
value={discription}
onChange={e=>onInputChange(e)}  /><br/>
</div> 

<div class="form-group right">
<lable class="label-title"><b>Date *</b></lable>
<input type="text" name="date"  class="form-input" placeholder="date"
value={date}
onChange={e=>onInputChange(e)}  /><br/>
</div>

</div>


<div class="horizontal-group">

<div class="form-group left">
<lable class="label-title"><b>No of Days *</b></lable>
<input type="text" name="noofdays"  class="form-input" placeholder="noofdays"
value={noofdays}
onChange={e=>onInputChange(e)}  /><br/>
</div> 

<div class="form-group right">
<lable class="label-title"><b>No of Nights *</b></lable>
<input type="text" name="noofnights"  class="form-input" placeholder="noofnights"
value={noofnights}
onChange={e=>onInputChange(e) } /><br/>
</div>

</div>



<div class="horizontal-group">

<div class="form-group left">
<lable class="label-title"><b>Vehical *</b></lable>
<input type="text" name="vehical"  class="form-input" placeholder="vehical"
value={vehical}
onChange={e=>onInputChange(e)}  /><br/>
</div> 

<div class="form-group right">
<lable class="label-title"><b>Per person *</b></lable>
<input type="text" name="perperson"  class="form-input" placeholder="perperson"
value={perperson}
onChange={e=>onInputChange(e)}  /><br/>
</div>

</div>

<div class="form-footer">

<input type="submit" name="submit" class="reg" value="Update Package"/>
</div>
<br/>
</div>  

<br/> 
</form>




</div></div></div>
) 
}



export default EditPackage