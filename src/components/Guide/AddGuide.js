import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import '../../Styles/Guide.css'

const AddGuide = ()=>{

     let history = useHistory();

     const[name,setName]=useState("");
     const[address,setAddress]=useState("");
     const[language,setLanguage]=useState("");
     const[email,setEmail]=useState("");
     const[phone,setPhone]=useState("");
     const[username,setUsername]=useState("");
     const[password,setPassword]=useState("");
     const[guideImage,setFileName]=useState("");
     const[message,setMessage]=useState("");

   
     const onChangeFile= e=>{
         setFileName(e.target.files[0]);
     }
   
   const changeOnClick =(e)=>{
       e.preventDefault();
   
       const formData=new FormData();
       formData.append("name",name);
       formData.append("address",address);
       formData.append("language",language);
       formData.append("email",email);
       formData.append("phone",phone);
       formData.append("username",username);
       formData.append("password",password);
       formData.append("guideImage",guideImage);
   
       setName("");
       setAddress("");
       setLanguage("");
       setEmail("");
       setPhone("");
       setUsername("");
       setPassword("");
       
   
       axios
       .post("http://localhost:8070/guide/add",formData)
       .then(
        (res)=>setMessage(res.data))
        
       .catch((err)=>{
           console.log(err);
       });
       history.push("/guide");
       alert("Guide Added Successfully!")
   };
    return(
       <div class = "info">
        <div className = "container">
              <div className = "w-50 mx-auto shadow p-5">
                     <h2 className = "text- mb-10">Add New Guide</h2>

                     <hr/>

                     <form onSubmit = {changeOnClick} encType = "multipart/form-data">
                            <label htmlFor = "floatingInput"><strong>Name</strong></label>
                            <div className = "form-group">
                                   <input 
                                   type = "text" 
                                   className = "form-control" 
                                   id = "floatingInput" 
                                   placeholder = "Enter Name"
                                   name = "name"
                                   value = {name}
                                   onChange = {(e)=>setName(e.target.value)}
                                   required = "required" />     
                            </div>

                           
                            <label htmlFor = "floatingInput"><strong>Address</strong></label>
                            <div className = "form-group">
                                   <input 
                                   type = "text" 
                                   className = "form-control" 
                                   id = "floatingInput" 
                                   placeholder = "Enter Address"
                                   name = "address"
                                   value = {address}
                                   onChange = {(e)=>setAddress(e.target.value)}
                                   required = "required" /> 
                            </div>

                           

                            <label htmlFor = "floatingInput"><strong>Language</strong></label>
                            <div className = "form-group">
                                   <select name = "language" 
                                   id = "floatingInput" 
                                   className = "form-control" 
                                   value = {language} 
                                   onChange = {(e)=>setLanguage(e.target.value)}
                                   required = "required"> 
                                          <option>Select</option>
                                          <option>Sinhala</option>
                                          <option>English</option>
                                          <option>Tamil</option>
                                   </select> 
                            </div>


                            <label htmlFor = "floatingInput"><strong>E-Mail</strong></label>
                            <div className = "form-group">
                                   <input 
                                   type = "email" 
                                   className = "form-control" 
                                   id = "floatingInput" 
                                   placeholder = "Enter E-Mail"
                                   name = "email"
                                   value = {email}
                                   onChange = {(e)=>setEmail(e.target.value)}
                                   required = "required" /> 
                            </div>

                     
                            <label htmlFor = "floatingInput"><strong>Contact Number</strong></label>
                            <div className = "form-group">
                                   <input 
                                   type = "text" 
                                   className = "form-control" 
                                   id = "floatingInput" 
                                   placeholder = "Enter Contact Number"
                                   name = "phone"
                                   size = "10"
                                   value = {phone}
                                   onChange = {(e)=>setPhone(e.target.value)}
                                   required = "required" /> 
                            </div>

                            
                            <label htmlFor = "floatingInput"><strong>Username</strong></label>
                            <div className = "form-group">
                                   <input 
                                   type = "text" 
                                   className = "form-control" 
                                   id = "floatingInput" 
                                   placeholder = "Enter Username"
                                   name = "username"
                                   value = {username}
                                   onChange = {(e)=>setUsername(e.target.value)}
                                   required = "required" /> 
                            </div>

                            

                            <label htmlFor = "floatingInput"><strong>Password</strong></label>
                            <div className = "form-group">
                                   <input 
                                   type = "password" 
                                   className = "form-control" 
                                   id = "floatingInput" 
                                   placeholder = "Enter Password"
                                   name = "password"
                                   value = {password}
                                   onChange = {(e)=>setPassword(e.target.value)}
                                   required = "required" /> 
                            </div>

                            <lable class="label-title"><b>Select Image</b>
                                   <div class="mb-3">
                                          <input class="form-control" 
                                          type="file" 
                                          id="formFile" 
                                          filename="guideImage" 
                                          onChange={onChangeFile}
                                          required = "required" />
                                   </div>
                            </lable> 

                            <button type = "submit" className = "btn btn-primary">Add Guide</button>
                            
                     </form>
              </div>
       </div>
       </div>
    );
};
 
export default AddGuide;