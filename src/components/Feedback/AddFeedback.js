import React,{sendLetter, useState} from "react"
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer'; 

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
      <div>
      <Header/>
      <div className="container" className="info" style={{background: "url(https://cdn.kimkim.com/files/a/content_articles/featured_photos/c38ba9e43631bcd320c316ea5ca54508d6064e72/big-ba994354b8809de2c2e6fb4c666aa6fc.jpg)", backgroundSize: "cover"}}>
      <div className="w-75 mx-auto shadow p-5" style={{background :"url(https://emozzy.com/wp-content/uploads/2020/09/Webp.net-compress-image-16.jpg)", filter: "drop-shadow(0 0 0.75rem #0A85ED)"}}>
          <h2 className ="text- mb-10">Feedback Form</h2>
          <hr/>   <br></br>
  <form onSubmit={e=>onSubmit(e)} >
<div className="form-group" >
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




 <div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>

<textarea 
      className="form-control" 
      id="exampleFormControlTextarea1" 
      rows="3"
      type = "text"
       placeholder="Please let us know how we're doing"
       name="feedBack"
       value={feedBack}
       onChange={e=>onInputChange(e)}  >
</textarea>
</div>






<button type="submit" className="btn btn-secondary">Submit</button>

</form>
</div>
<br/><br/><br/>
</div>
<Footer/>
</div>
    );
   };
   
export default AddFeedback;

//MAIN CONTAINER
const FeedbackContainer = styled.div`



}
`;