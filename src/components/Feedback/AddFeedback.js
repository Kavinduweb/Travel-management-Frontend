import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
 
const AddFeedback = ()=>{
 
     let history = useHistory();
 
    const [feedback,addFeedback] = useState({
            fullName:"",
            email:"",
            feedBack:"" 
    });
 const {fullName,email,feedBack}=feedback;
 const onInputChange = e=>{
     addFeedback({...feedback,[e.target.name]: e.target.value});
 };
 
 const onSubmit=async e =>{
     e.preventDefault();
     await axios.post ("http://localhost:8070/feedback/add",feedback);
     history.push("/");
     alert(" Successfully added Your Feedback")
 }
 
    return(
 
        <div className="container" className="info">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className ="text- mb-10">Feedback Form</h2>
            <hr/>   <br></br>
    <form onSubmit={e=>onSubmit(e)}>
  <div class="form-group">
     <h6>Full Name</h6>
      <input
         type = "text"
         className="form-control form-control-lg"
         placeholder="Enter your Name"
         name="fullName"
         value={fullName}
         onChange={e=>onInputChange(e)}
      />
   </div>
 
   <div class="form-group">
   <h6>Email</h6>
      <input
         type = "text"
         className="form-control form-control-lg"
         placeholder="Enter your Email"
         name="email"
         value={email}
         onChange={e=>onInputChange(e)}
      />
   </div>
 
 


 
   <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
 
  <textarea 
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        type = "text"
         placeholder="Please let us know how we're doing"
         name="feedBack"
         value={feedBack}
         onChange={e=>onInputChange(e)}  >
  </textarea>
</div>





 
<button type="submit" class="btn btn-primary">Submit</button>
 
</form>
</div>
<br/><br/><br/>
</div>
    );
};
 
export default AddFeedback;